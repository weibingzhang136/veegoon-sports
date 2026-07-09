import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >

      <Image
        src="/brand/icon.svg"
        alt="Veegoon Sports"
        width={40}
        height={40}
        priority
      />

      <div className="hidden sm:block">
        <div className="text-xl font-bold tracking-tight text-gray-900">
          Veegoon
        </div>

        <div className="text-xs font-medium tracking-[0.3em] text-blue-600">
          SPORTS
        </div>
      </div>

    </Link>
  );
}