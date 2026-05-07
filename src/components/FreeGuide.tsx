import { Download, FileText, Check } from 'lucide-react';

export default function FreeGuide({
  sectionLabel,
  title,
  description,
  guideTitle,
  guideSubtitle,
  bullets,
  buttonLabel,
  guideHref,
}: {
  sectionLabel: string;
  title: string;
  description: string;
  guideTitle: string;
  guideSubtitle: string;
  bullets: string[];
  buttonLabel: string;
  guideHref: string;
}) {
  return (
    <section id="guide" className="py-20 md:py-24 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              {sectionLabel}
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-900">
              {title}
            </h2>
            <p className="mt-5 text-stone-600 text-lg leading-relaxed">
              {description}
            </p>

            <ul className="mt-6 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-stone-700">
                  <Check className="text-amber-700 mt-0.5 shrink-0" size={14} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-stone-200 bg-stone-50 p-7 md:p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-md bg-stone-900 text-stone-50 flex items-center justify-center">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl text-stone-900 tracking-tight">
                  {guideTitle}
                </h3>
                <p className="mt-1 text-sm text-stone-600">{guideSubtitle}</p>
              </div>
            </div>

            <a
              href={guideHref}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-stone-900 text-stone-50 px-4 py-2.5 text-sm font-medium hover:bg-stone-700 transition-colors"
            >
              <Download size={14} />
              {buttonLabel}
            </a>
            <p className="mt-3 text-xs text-stone-500">
              Free, no email required. If the file doesn't open, right-click and save.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
