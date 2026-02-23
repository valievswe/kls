import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

type Item = { title: string; desc: string };

export default function Partnerships({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: Item[];
}) {
  return (
    <Section>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-3 text-neutral-300">{subtitle}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((x) => (
          <Card key={x.title}>
            <h3 className="font-semibold text-lg">{x.title}</h3>
            <p className="text-neutral-300 mt-2">{x.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
