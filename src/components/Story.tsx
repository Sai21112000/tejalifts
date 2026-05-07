type TimelineItem = { title: string; period: string; description: string };

export default function Story({
  sectionLabel,
  title,
  paragraphs,
  timeline,
}: {
  sectionLabel: string;
  title: string;
  paragraphs: string[];
  timeline: TimelineItem[];
}) {
  return (
    <section id="story" className="py-20 md:py-28 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              {sectionLabel}
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-900">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-stone-700 text-base md:text-lg leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500">
            Timeline
          </h3>
          <ol className="mt-6 grid md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 rounded-lg overflow-hidden">
            {timeline.map((t) => (
              <li key={t.title} className="bg-white p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl text-stone-900 tracking-tight">
                    {t.title}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-stone-500 shrink-0">
                    {t.period}
                  </span>
                </div>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  {t.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
