import AboutGalleryCarousel from "@/components/AboutGalleryCarousel";
import Container from "@/components/ui/Container";
import { getMessages } from "@/content/i18n";

const galleryImages = [
  "/images/hero-campus.jpg",
  "/images/inclass.jpg",
  "/images/gradceremony.jpg",
  "/images/matchday.jpg",
];

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getMessages(locale);

  const slides = t.about_page.gallery.map((item, index) => ({
    src: galleryImages[index] ?? galleryImages[galleryImages.length - 1],
    alt: `${item.title} - Kokand Leader School`,
    title: item.title,
    caption: item.desc,
  }));

  return (
    <main className="bg-slate-50">
      <section className="border-b border-violet-200/60 bg-white">
        <Container>
          <div className="py-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-700">
              {t.nav.about}
            </p>
            <h1 className="mt-3 text-4xl text-slate-900 sm:text-5xl">{t.about_page.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-700">{t.about_page.subtitle}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-violet-200/60 bg-gradient-to-b from-white to-violet-50/40">
        <Container>
          <div className="grid gap-8 py-12 sm:py-14 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-xl border border-violet-200/70 bg-white p-6 shadow-[0_20px_32px_-30px_rgba(109,40,217,0.45)]">
              <h2 className="text-3xl text-slate-900">{t.about_page.mission_title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">{t.about_page.mission_text}</p>
            </article>

            <article className="rounded-xl border border-violet-200/70 bg-violet-50/60 p-6">
              <h2 className="text-3xl text-slate-900">{t.about_page.values_title}</h2>
              <div className="mt-5 space-y-4">
                {t.about_page.values.map((value) => (
                  <div key={value.title}>
                    <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                    <p className="mt-1 text-base text-slate-700">{value.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-14">
            <h2 className="text-3xl text-slate-900 sm:text-4xl">{t.about_page.gallery_title}</h2>
            <p className="mt-3 max-w-3xl text-base text-slate-700">{t.about_page.gallery_subtitle}</p>
            <div className="mt-7">
              <AboutGalleryCarousel slides={slides} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
