import { ClipboardList, Apple, TrendingUp, RotateCcw } from 'lucide-react';

type Card = { title: string; description: string };
type ImageBlock = { src: string; alt: string; caption: string };

const icons = [ClipboardList, Apple, TrendingUp, RotateCcw];

export default function Approach({
  sectionLabel,
  intro,
  cards,
  image,
}: {
  sectionLabel: string;
  intro: string;
  cards: Card[];
  image: ImageBlock;
}) {
  return (
    <section id="approach" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
            {sectionLabel}
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-900">
            Structure, not random motivation.
          </h2>
          <p className="mt-5 text-stone-600 text-lg leading-relaxed">{intro}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {cards.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={c.title}
                className="bg-white rounded-lg border border-stone-200 p-7"
              >
                <div className="w-10 h-10 rounded-md bg-amber-50 border border-amber-100 grid place-items-center text-amber-700">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 font-display text-xl text-stone-900 tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>
        <figure className="mt-12 grid lg:grid-cols-12 overflow-hidden rounded-lg border border-stone-200 bg-white">
          <img
            src={image.src}
            alt={image.alt}
            className="lg:col-span-7 h-full min-h-[320px] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="lg:col-span-5 p-8 flex items-center text-lg leading-relaxed text-stone-700">
            {image.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
