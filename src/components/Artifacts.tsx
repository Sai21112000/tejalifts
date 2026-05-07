import { FileText } from 'lucide-react';

type Item = {
  title: string;
  description: string;
  buttonLabel: string;
  previewLabel: string;
  href: string;
  bullets: string[];
};

export default function Artifacts({
  sectionLabel,
  intro,
  items,
  footnote,
}: {
  sectionLabel: string;
  intro: string;
  items: Item[];
  footnote: string;
}) {
  return (
    <section id="artifacts" className="py-20 md:py-28 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
            {sectionLabel}
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-900">
            Simple systems, clearly written.
          </h2>
          <p className="mt-5 text-stone-600 text-lg leading-relaxed">{intro}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((a) => (
            <article
              key={a.title}
              className="rounded-lg border border-stone-200 bg-stone-50 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-white border-b border-stone-200 p-5 flex flex-col">
                <div className="flex items-center gap-2 text-stone-400">
                  <FileText size={14} />
                  <span className="text-[11px] uppercase tracking-[0.18em]">
                    {a.previewLabel}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-2/3 bg-stone-200 rounded" />
                  <div className="h-2 w-5/6 bg-stone-200 rounded" />
                  <div className="h-2 w-1/2 bg-stone-200 rounded" />
                </div>
                <div className="mt-4 space-y-1.5">
                  {a.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded bg-stone-100 px-2 py-1 text-[11px] leading-snug text-stone-500"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
                <div className="mt-auto h-2 w-1/3 bg-amber-100 rounded" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-stone-900 tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {a.description}
                </p>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-5 inline-flex items-center text-sm font-medium text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {a.buttonLabel}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-stone-500">{footnote}</p>
      </div>
    </section>
  );
}
