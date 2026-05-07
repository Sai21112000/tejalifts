type ProofItem = { label: string; value: string; context: string };

export default function RealWorldProof({
  sectionLabel,
  title,
  items,
}: {
  sectionLabel: string;
  title: string;
  items: ProofItem[];
}) {
  return (
    <section className="py-20 md:py-24 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400">
            {sectionLabel}
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-50">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-stone-800 bg-stone-950/40 p-6"
            >
              <div className="text-xs uppercase tracking-[0.16em] text-stone-400">
                {item.label}
              </div>
              <div className="mt-3 font-display text-3xl text-stone-50 tracking-tight">
                {item.value}
              </div>
              <p className="mt-3 text-sm text-stone-400 leading-relaxed">
                {item.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
