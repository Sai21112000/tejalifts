import { Check, ArrowRight } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export default function Services({
  sectionLabel,
  intro,
  items,
  note,
}: {
  sectionLabel: string;
  intro: string;
  items: Service[];
  note: string;
}) {
  return (
    <section id="services" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
            {sectionLabel}
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-900">
            Two ways to work with me.
          </h2>
          <p className="mt-5 text-stone-600 text-lg leading-relaxed">{intro}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map((s) => (
            <article
              key={s.title}
              className="bg-white rounded-lg border border-stone-200 p-7 md:p-8 flex flex-col"
            >
              <h3 className="font-display text-2xl text-stone-900 tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-stone-600 leading-relaxed">
                {s.description}
              </p>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check
                      className="text-amber-700 mt-0.5 shrink-0"
                      size={16}
                    />
                    <span className="text-sm text-stone-700">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-stone-900 border-b border-stone-300 hover:border-stone-900 w-fit pb-0.5 transition-colors"
              >
                Message me to discuss
                <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-stone-500 max-w-2xl">{note}</p>
      </div>
    </section>
  );
}
