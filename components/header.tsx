'use client';
import { useState, useEffect } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@trycreo/ui/components';
import { Sparkle, Layout } from 'lucide-react';

import Logo from '../icons/logo';
import HeaderLinks from './header-links';
import { usePathname } from 'next/navigation';
import { ToggleAiButton, ToggleLayoutButton } from '@trycreo/ui/components';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="w-full h-[54px] border-b flex items-center px-6">
      <div className="flex-1 flex items-center space-x-2">
        <Logo className="w-9 h-9 !-mr-1" />
        <HeaderLinks />
      </div>
      <div className="mx-auto">
        {pathname?.includes('tasks/') && (
          <ToggleGroup type="single">
            <ToggleLayoutButton />
            <ToggleAiButton />
          </ToggleGroup>
        )}
      </div>
      <div className="flex-1">
        <div className="py-1 px-2 w-fit text-sm !ml-auto border rounded-lg">personal</div>
      </div>
    </div>
  );
}
