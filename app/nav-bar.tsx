import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-3 bg-background border-b h-[56px]">
      <Link href="/">
        <Image width="25" height="25" src="/creo-full.png" alt="Logo" />
      </Link>

      <p className="border rounded-md px-2 py-0.5 text-sm">Local</p>
    </div>
  );
}
