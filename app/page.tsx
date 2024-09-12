import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Value from "./components/Value";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Value />
      </main>
      ;
    </div>
  );
}
