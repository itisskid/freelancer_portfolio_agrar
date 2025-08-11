export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-neutral-600 max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}

