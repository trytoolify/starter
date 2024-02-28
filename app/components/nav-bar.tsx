"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <>
            <nav className="flex items-center justify-between p-3 bg-background">
                <div className="flex items-center space-x-4 flex-grow justify-start">
                    <Link href="/">
                        <Image
                            width="25"
                            height="25"
                            src="/creo-full.png"
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div className="flex space-x-2 items-center bg-secondary p-1.5 text-sm">
                    Personal
                </div>
            </nav>
        </>
    );
}
