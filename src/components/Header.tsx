"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMessages } from "@/content/i18n";
import Container from "@/components/ui/Container";

export default function Header({ locale }: { locale: string }) {
  const t = getMessages(locale);
  const pathname = usePathname();

  const linkCls =
    "text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition-colors duration-150 hover:text-violet-700";
  const localeCls = "text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 hover:text-violet-700";
  const activeLocaleCls =
    "text-[11px] font-semibold uppercase tracking-[0.12em] text-violet-800 underline underline-offset-4";

  const getLocaleHref = (targetLocale: string) => {
    const currentPath = pathname || `/${locale}`;
    const suffix = currentPath.replace(/^\/(en|uz|ru)(?=\/|$)/, "");
    return `/${targetLocale}${suffix}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-violet-200/60 bg-white/95 backdrop-blur-sm">
      <div className="border-b border-violet-200/60 bg-gradient-to-r from-violet-50 to-white py-2 text-xs text-slate-700">
        <Container>
          <div className="flex items-center justify-between">
            <p>International Partnership Office</p>
            <div className="hidden gap-5 sm:flex">
              <a href="tel:+998700000000">+998 70 000 00 00</a>
              <a href="mailto:partnerships@kls.uz">partnerships@kls.uz</a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="text-base font-semibold tracking-wide text-slate-900">
            KOKAND LEADER SCHOOL
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link className={linkCls} href={`/${locale}`}>
              {t.nav.home}
            </Link>
            <Link className={linkCls} href={`/${locale}/programs`}>
              {t.nav.programs}
            </Link>
            <Link className={linkCls} href={`/${locale}/admissions`}>
              {t.nav.admissions}
            </Link>
            <Link className={linkCls} href={`/${locale}/about`}>
              {t.nav.about}
            </Link>
            <Link className={linkCls} href={`/${locale}/contact`}>
              {t.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link className={locale === "en" ? activeLocaleCls : localeCls} href={getLocaleHref("en")}>
              EN
            </Link>
            <Link className={locale === "uz" ? activeLocaleCls : localeCls} href={getLocaleHref("uz")}>
              UZ
            </Link>
            <Link className={locale === "ru" ? activeLocaleCls : localeCls} href={getLocaleHref("ru")}>
              RU
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
