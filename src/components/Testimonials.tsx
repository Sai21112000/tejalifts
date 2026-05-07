import { Quote } from 'lucide-react';

type TestimonialItem = {
  name: string;
  context: string;
  quote: string;
};

export default function Testimonials({
  sectionLabel,
  title,
  items,
}: {
  sectionLabel: string;
  title: string;
  items: TestimonialItem[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
            {sectionLabel}
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-900">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name + t.quote.slice(0, 16)}
              className="bg-white rounded-lg border border-stone-200 p-7 flex flex-col"
            >
              <Quote className="text-amber-700" size={20} />
              <blockquote className="mt-4 text-stone-700 leading-relaxed text-[15px]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-stone-100">
                <div className="text-sm font-medium text-stone-900">{t.name}</div>
                <div className="text-xs text-stone-500 mt-0.5">{t.context}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
