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
        width={36}
        height={36}
      />

      <span className="text-xl font-bold tracking-tight text-gray-900">
        Veegoon Sports
      </span>

    </Link>
  );
}