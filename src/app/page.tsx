import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageSections } from "@/components/PageSections";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Header />
      <PageSections />
      <Footer />
    </main>
  );
}
