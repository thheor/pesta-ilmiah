import { MainLayout } from "./layout";
import { LinkButton } from "./components/linkButton";

export function NotFound() {
  return (
    <MainLayout className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-8xl">404</h1>
      <h1>Halaman tidak ditemukan</h1>
      <LinkButton href="/" title="Kembali ke beranda" />
    </MainLayout>
  );
}
