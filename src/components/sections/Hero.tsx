import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type HeroProps = {
  title: string;
  subtitle: string;
  applyLabel: string;
  visitLabel: string;
  applyHref: string;
  visitHref: string;
};

export default function Hero({
  title,
  subtitle,
  applyLabel,
  visitLabel,
  applyHref,
  visitHref,
}: HeroProps) {
  return (
    <section className="border-b border-neutral-800 py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight">{title}</h1>
          <p className="mt-5 text-lg text-neutral-300">{subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={applyHref} variant="solid">
              {applyLabel}
            </Button>
            <Button href={visitHref} variant="outline">
              {visitLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
