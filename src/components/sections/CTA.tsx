import Link from "next/link";

type CTAProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export default function CTA({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-6 rounded-xl border border-neutral-800 bg-neutral-900/40 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-neutral-300">{subtitle}</p>
          </div>

          <div className="flex gap-3">
            <Link
              className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
              href={primaryHref}
            >
              {primaryLabel}
            </Link>
            <Link
              className="rounded-lg border border-neutral-700 px-6 py-3 transition hover:border-neutral-500"
              href={secondaryHref}
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
