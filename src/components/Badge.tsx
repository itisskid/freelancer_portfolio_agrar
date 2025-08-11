export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-800 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-neutral-200">
      {children}
    </span>
  );
}

