import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface BasicPageProps extends React.PropsWithChildren {
  className?: string;
}

export function MainLayout({ className, children }: BasicPageProps) {
  return (
    <>
      <Navbar></Navbar>
      <main className="font-sans">{children}</main>
      <Footer />
    </>
  );
}
