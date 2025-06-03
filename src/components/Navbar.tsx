"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./Toggle";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("navbar");
  const currentPath = pathname.replace(`/${locale}`, "") || "/";
  const navLinks = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <nav className="flex flex-row w-full items-center justify-between">
      <Link href="/" className="text-2xl font-extrabold">
        BanDev
      </Link>

      <ul className="hidden sm:flex border-2 rounded-xl md:rounded-full py-2.5 px-4 bg-card text-card-foreground shadow-sm justify-center gap-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={`/${locale}${link.href}`}
              className={cn(
                "rounded-full transition-colors hover:bg-primary-border hover:text-popover dark:hover:bg-primary",
                currentPath === link.href
                  ? "bg-primary px-2 py-0.5 text-popover"
                  : "px-2 py-0.5"
              )}
            >
              {t(link.label)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <ul className="flex border-2 rounded-full py-2.5 px-4 bg-card text-card-foreground shadow-sm justify-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={`/${locale}${link.href}`}
                className={cn(
                  "rounded-full transition-colors text-sm p-2",
                  currentPath === link.href
                    ? "bg-primary hover:bg-primary-border text-popover"
                    : "hover:bg-primary-border hover:text-popover"
                )}
              >
                {t(link.label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2.5">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </nav>
  );
}
