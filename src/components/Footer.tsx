"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-16 sm:mb-0 rounded-full border-2 px-4 py-2 shadow-sm bg-card text-card-foreground">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link
            href={`/${locale}`}
            className="text-lg font-bold hover:text-primary transition-colors"
          >
            BanDev
          </Link>
          <span className="text-sm text-muted-foreground">
            © {currentYear}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Powered by</span>
          <Link
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            Vercel
          </Link>
        </div>
      </div>
    </footer>
  );
}
