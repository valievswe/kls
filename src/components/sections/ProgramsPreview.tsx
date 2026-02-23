import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

type Program = {
  title: string;
  desc: string;
};

export default function ProgramsPreview({
  title,
  items,
}: {
  title: string;
  items: Program[];
}) {
  return (
    <Section>
      <h2 className="text-2xl font-bold">{title}</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <Card key={p.title}>
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-neutral-300 mt-2">{p.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
