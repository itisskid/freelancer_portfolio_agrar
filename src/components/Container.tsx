export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`container-default ${className}`}>{children}</div>;
}

