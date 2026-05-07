import { ArrowRight } from 'lucide-react';

type Stat = { label: string; value: string };
type Cta = { label: string; href: string };
type ImageBlock = { src: string; alt: string; caption: string };

export default function Results({
  sectionLabel,
  intro,
  stats,
  body,
  cta,
  image,
}: {
  sectionLabel: string;
  intro: string;
  stats: Stat[];
  body: string;
  cta: Cta;
  image: ImageBlock;
}) {
  return (
    <section id="results" className="py-20 md:py-28 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
            {sectionLabel}
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-900">
            Competition numbers, honestly earned.
          </h2>
          <p className="mt-5 text-stone-600 leading-relaxed">{intro}</p>
          <p className="mt-4 text-stone-600 leading-relaxed">{body}</p>
          <a
            href={cta.href}
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-stone-900 text-stone-50 px-5 py-3 text-sm font-medium hover:bg-stone-700 transition-colors"
          >
            {cta.label}
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="lg:col-span-7">
          <dl className="grid grid-cols-2 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200 rounded-lg overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-3xl md:text-4xl text-stone-900 tracking-tight">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-stone-500">
            2025 meet results, under-74 kg weight class.
          </p>
          <figure className="mt-8 overflow-hidden rounded-lg border border-stone-200 bg-stone-50">
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="p-4 text-sm leading-relaxed text-stone-600">
              {image.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
