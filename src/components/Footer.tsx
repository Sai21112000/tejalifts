export default function Footer({
  disclaimer,
  copyright,
}: {
  disclaimer: string;
  copyright: string;
}) {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 md:items-center">
        <p className="text-sm text-stone-500 md:col-span-2 leading-relaxed max-w-2xl">
          {disclaimer}
        </p>
        <p className="text-sm text-stone-500 md:text-right">{copyright}</p>
      </div>
    </footer>
  );
}
