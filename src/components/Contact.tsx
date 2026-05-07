import { Check, Instagram, Mail, MessageCircle } from 'lucide-react';

type Button = { label: string; href: string; kind: 'whatsapp' | 'instagram' | 'email' };

const iconFor = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  email: Mail,
};

export default function Contact({
  sectionLabel,
  title,
  body,
  promptTitle,
  prompts,
  buttons,
}: {
  sectionLabel: string;
  title: string;
  body: string;
  promptTitle: string;
  prompts: string[];
  buttons: Button[];
}) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
          {sectionLabel}
        </p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight tracking-tight text-stone-900">
          {title}
        </h2>
        <p className="mt-5 text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
          {body}
        </p>

        <div className="mt-10 rounded-lg border border-stone-200 bg-stone-50 p-6 md:p-8 text-left max-w-xl mx-auto">
          <h3 className="text-sm font-medium text-stone-900">{promptTitle}</h3>
          <ul className="mt-3 space-y-2">
            {prompts.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-stone-700">
                <Check className="text-amber-700 mt-0.5 shrink-0" size={14} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {buttons.map((b) => {
            const Icon = iconFor[b.kind];
            const isPrimary = b.kind === 'whatsapp';
            return (
              <a
                key={b.label}
                href={b.href}
                target={b.kind === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={
                  isPrimary
                    ? 'inline-flex items-center gap-2 rounded-md bg-stone-900 text-stone-50 px-5 py-3 text-sm font-medium hover:bg-stone-700 transition-colors'
                    : 'inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 hover:border-stone-900 transition-colors'
                }
              >
                <Icon size={16} />
                {b.label}
              </a>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-stone-500">
          I read every message and reply personally, usually within a day or two.
        </p>
      </div>
    </section>
  );
}
