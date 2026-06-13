interface BasicPageProps extends React.PropsWithChildren {
  className?: string;
}

export function MainLayout({ className, children }: BasicPageProps) {
  return (
    <main className="grid grid-cols-12 font-sans">
      <div className={`${className} col-span-10 col-start-2 `}>{children}</div>
    </main>
  );
}
