import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
        V
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-gray-900">
          Veegoon Sports
        </span>

        <span className="text-xs tracking-wide text-gray-500">
          微馆体育
        </span>
      </div>
    </Link>
  );
}