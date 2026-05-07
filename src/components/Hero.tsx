import { ArrowRight } from 'lucide-react';

type Cta = { label: string; href: string };
type TrustItem = { value: string; label: string };

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  trustItems,
  portraitUrl,
  portraitAlt,
  location,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  trustItems: TrustItem[];
  portraitUrl: string;
  portraitAlt: string;
  location: string;
}) {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-stone-900">
              {title}
            </h1>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-md bg-stone-900 text-stone-50 px-5 py-3 text-sm font-medium hover:bg-stone-700 transition-colors"
              >
                {primaryCta.label}
                <ArrowRight size={16} />
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center rounded-md border border-stone-300 text-stone-800 px-5 py-3 text-sm font-medium hover:border-stone-900 transition-colors"
              >
                {secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-stone-200 border border-stone-200">
                <img
                  src={portraitUrl}
                  alt={portraitAlt}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden sm:block bg-stone-50 border border-stone-200 rounded-md px-4 py-3 shadow-sm">
                <p className="text-xs text-stone-500 uppercase tracking-[0.18em]">Based in</p>
                <p className="text-sm text-stone-900 font-medium">{location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
          {trustItems.map((t) => (
            <div key={t.label}>
              <div className="font-display text-2xl md:text-3xl text-stone-900 tracking-tight">
                {t.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-stone-500">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
