import { Check, X } from 'lucide-react';

export default function WhoFor({
  sectionLabel,
  title,
  forList,
  notForList,
}: {
  sectionLabel: string;
  title: string;
  forList: { heading: string; items: string[] };
  notForList: { heading: string; items: string[] };
}) {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
            {sectionLabel}
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-900">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-7">
            <h3 className="font-display text-xl text-stone-900 tracking-tight">
              {forList.heading}
            </h3>
            <ul className="mt-5 space-y-3">
              {forList.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-amber-700/10 text-amber-700 flex items-center justify-center">
                    <Check size={12} />
                  </span>
                  <span className="text-sm text-stone-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-stone-200 bg-stone-50 p-7">
            <h3 className="font-display text-xl text-stone-900 tracking-tight">
              {notForList.heading}
            </h3>
            <ul className="mt-5 space-y-3">
              {notForList.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center">
                    <X size={12} />
                  </span>
                  <span className="text-sm text-stone-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
