export function BilingualText({ en, zh }: { en: string; zh: string }) {
  return (
    <div className="mb-6 group">
      <p className="text-slate-900 font-sans text-lg leading-relaxed mb-2">
        {en}
      </p>
      <p className="text-slate-600 font-sans text-[1.05rem] leading-loose">
        {zh}
      </p>
    </div>
  );
}
