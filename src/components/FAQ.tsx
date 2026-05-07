import { useState } from 'react';
import { Plus } from 'lucide-react';

type Item = { question: string; answer: string };

export default function FAQ({
  sectionLabel,
  items,
}: {
  sectionLabel: string;
  items: Item[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
          {sectionLabel}
        </p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight tracking-tight text-stone-900">
          Common questions.
        </h2>

        <div className="mt-10 border-t border-stone-200">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question} className="border-b border-stone-200">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left rounded-sm"
                >
                  <span className="font-display text-lg md:text-xl text-stone-900 tracking-tight">
                    {f.question}
                  </span>
                  <Plus
                    className={`shrink-0 mt-1 text-stone-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-45 text-amber-700' : ''
                    }`}
                    size={20}
                  />
                </button>
                {isOpen && (
                  <p
                    id={`faq-panel-${i}`}
                    className="pb-5 text-stone-600 leading-relaxed max-w-3xl"
                  >
                    {f.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
