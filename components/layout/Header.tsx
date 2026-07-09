import Logo from "@/components/branding/Logo";
import Link from "next/link";

import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

      <Logo />


        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            首页
          </Link>


          <Link
            href="/solutions"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            解决方案
          </Link>


          <Link
            href="/products"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            产品
          </Link>


          <Link
            href="/cases"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            案例
          </Link>


          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            关于我们
          </Link>

        </nav>


        {/* CTA */}
        <div>
          <Button>
            预约演示
          </Button>
        </div>


      </div>
    </header>
  );
}