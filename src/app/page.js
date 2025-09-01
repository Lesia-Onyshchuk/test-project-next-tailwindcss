import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Tariffs from "./components/tariffs";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <Image
          src="/images/body.png"
          width={368}
          height={346}
          alt=""
          className="absolute top-[559px] right-0 z-0"
        />
        <Hero />
        <Tariffs />
      </main>
      <Footer />
    </>
  );
}
