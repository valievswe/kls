import Container from "@/components/ui/Container";
import { getMessages } from "@/content/i18n";

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <main className="bg-slate-50">
      <section className="border-b border-violet-200/60 bg-white">
        <Container>
          <div className="py-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-700">
              {t.nav.contact}
            </p>
            <h1 className="mt-3 text-4xl text-slate-900 sm:text-5xl">{t.contacts_page.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-700">{t.contacts_page.subtitle}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-violet-200/60 bg-gradient-to-b from-white to-violet-50/40">
        <Container>
          <div className="grid gap-8 py-12 sm:py-14 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-xl border border-violet-200/70 bg-white p-6 shadow-[0_20px_34px_-30px_rgba(109,40,217,0.45)]">
              <h2 className="text-2xl font-semibold text-slate-900">{t.contacts_page.visit_title}</h2>
              <div className="mt-4 space-y-2 text-base text-slate-700">
                {t.contacts_page.visit_lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <h3 className="mt-7 text-lg font-semibold text-slate-900">{t.contacts_page.hours_title}</h3>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                {t.contacts_page.hours.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>

            <article className="rounded-xl border border-violet-200/70 bg-white p-6 shadow-[0_20px_34px_-30px_rgba(109,40,217,0.45)]">
              <h2 className="text-2xl font-semibold text-slate-900">{t.contacts_page.departments_title}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {t.contacts_page.departments.map((department) => (
                  <div
                    key={department.name}
                    className="rounded-lg border border-violet-200/60 bg-violet-50/50 p-4"
                  >
                    <p className="font-semibold text-slate-900">{department.name}</p>
                    <a className="mt-2 block text-sm text-violet-700" href={`mailto:${department.email}`}>
                      {department.email}
                    </a>
                    <a className="mt-1 block text-sm text-slate-700" href={`tel:${department.phone}`}>
                      {department.phone}
                    </a>
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
            <div className="max-w-3xl rounded-xl border border-violet-200/70 bg-violet-50/50 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">{t.contacts_page.form_title}</h2>
              <p className="mt-2 text-base text-slate-700">{t.contacts_page.form_subtitle}</p>

              <form className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
                    {t.contacts_page.form_fields.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-violet-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-violet-300 transition focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                    {t.contacts_page.form_fields.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-violet-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-violet-300 transition focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
                    {t.contacts_page.form_fields.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-violet-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-violet-300 transition focus:ring-2"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-800"
                >
                  {t.contacts_page.form_fields.submit}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
