import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Hero />
      </main>
      ;
    </div>
  );
}
