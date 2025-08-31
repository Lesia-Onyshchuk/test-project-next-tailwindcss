import Header from "./components/header";
import Hero from "./components/hero";
import Tariffs from "./components/tariffs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tariffs />
      </main>
    </>
  );
}
