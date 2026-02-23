import Link from "next/link";
import Container from "@/components/ui/Container";
import { getMessages } from "@/content/i18n";

export default function Footer({ locale }: { locale: string }) {
  const t = getMessages(locale);
  const links = [
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/programs`, label: t.nav.programs },
    { href: `/${locale}/admissions`, label: t.nav.admissions },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const contacts = [
    { href: "mailto:partnerships@kls.uz", label: "partnerships@kls.uz" },
    { href: "tel:+998700000000", label: "+998 70 000 00 00" },
  ];

  return (
    <footer className="mt-12 border-t border-violet-300/50 bg-gradient-to-r from-violet-950 to-violet-800 text-white">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-lg font-semibold">{t.footer.school_name}</p>
            <p className="mt-3 max-w-md text-sm text-violet-100">{t.footer.description}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-violet-100">
              {t.footer.links_title}
            </p>
            <div className="mt-3 space-y-2 text-sm text-violet-100">
              {links.map((item) => (
                <Link key={item.href} href={item.href} className="block hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-violet-100">
              {t.footer.contact_title}
            </p>
            <div className="mt-3 space-y-2 text-sm text-violet-100">
              {contacts.map((item) => (
                <a key={item.href} className="block hover:text-white" href={item.href}>
                  {item.label}
                </a>
              ))}
              <p>{t.footer.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-violet-200/30 py-4 text-sm text-violet-100">
          &copy; {new Date().getFullYear()} {t.footer.school_name}. {t.footer.rights}
        </div>
      </Container>
    </footer>
  );
}
