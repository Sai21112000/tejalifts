import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavLink = { label: string; href: string };

export default function Navbar({
  brand,
  links,
}: {
  brand: string;
  links: NavLink[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-stone-50/95 backdrop-blur border-b border-stone-200'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-600" />
          <span className="font-display text-lg tracking-tight text-stone-900">
            {brand}
          </span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md bg-stone-900 text-stone-50 px-4 py-2 text-sm font-medium hover:bg-stone-700 transition-colors"
        >
          Message me
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-stone-900"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-6 py-5 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-stone-700 text-base py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-stone-900 text-stone-50 px-4 py-3 text-sm font-medium"
            >
              Message me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
