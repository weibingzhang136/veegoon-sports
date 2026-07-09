export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Veegoon Sports
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Building the Digital Infrastructure for Sports.
          </p>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 Veegoon Sports. All rights reserved.
        </p>
      </div>
    </footer>
  );
}