import Link from "next/link";
import Logo from "@/components/branding/Logo";
import Button from "@/components/ui/Button";

export default function Header() {
  const navItems = [
    { label: "首页", href: "/" },
    { label: "解决方案", href: "/solutions" },
    { label: "案例", href: "/cases" },
    { label: "关于我们", href: "/about" },
    { label: "联系我们", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-600 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button>预约演示</Button>
      </div>
    </header>
  );
}