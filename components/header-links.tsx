'use client';

import { Button, ButtonProps } from '@trycreo/ui/components';
import { cn } from '@trycreo/ui/lib';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Globe, LayoutGrid, Zap } from 'lucide-react';

const NavButton = ({
  children,
  className = '',
  href = '#',
  altHref,
  ...rest
}: ButtonProps &
  React.RefAttributes<HTMLButtonElement> & {
    href?: string;
    altHref?: string;
  }) => {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    return (pathname === href || pathname === altHref) && href !== '#';
  }, [href, pathname]);

  if (href) {
    return (
      <Link className="w-auto relative" href={href}>
        <Button
          className={cn(
            'h-auto w-full justify-start items-center flex font-light space-x-2 text-gray-400 capitalize',
            isActive && 'bg-accent text-accent-foreground',
            className
          )}
          variant={'ghost'}
          {...rest}
        >
          {children}
        </Button>
      </Link>
    );
  }
  return (
    <Button
      className={cn(
        'h-auto w-full justify-start items-center flex font-light space-x-2 text-gray-400 capitalize',
        isActive && 'bg-accent text-accent-foreground',
        className
      )}
      variant={'ghost'}
      {...rest}
    >
      {children}
    </Button>
  );
};

const HeaderLinks = () => {
  const pathname = usePathname();
  const isInTask = useMemo(() => {
    return pathname?.includes('tasks/');
  }, [pathname]);
  const taskName = useMemo(() => {
    return pathname?.split('tasks/')?.[1];
  }, [pathname]);
  return (
    <div className="flex items-center space-x-1">
      <NavButton href={`/`}>
        <Zap className="w-4 h-4 text-gray-300" /> <span className="truncate text-start"> Tasks </span>
      </NavButton>
      {pathname && isInTask && (
        <NavButton className="max-w-[200px]" href={pathname}>
          <Zap className="w-4 h-4 text-gray-300" /> <span className="truncate text-start"> {taskName} </span>
        </NavButton>
      )}
    </div>
  );
};

export default HeaderLinks;
