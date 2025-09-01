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
          className="absolute top-[559px] right-0 z-0 xs:hidden"
        />
        <Image
          src="/images/mobile-top.png"
          width={185}
          height={174}
          alt=""
          className="absolute top-[185px] right-[-10px] z-0 xl:hidden"
        />
        <Image
          src="/images/mobile-center.png"
          width={185}
          height={174}
          alt=""
          className="absolute top-[512px] left-[-55px] z-0 xl:hidden"
        />
        <Image
          src="/images/mobile-bottom.png"
          width={185}
          height={174}
          alt=""
          className="absolute top-[970px] right-[-90px] z-0 xl:hidden"
        />
        <Hero />
        <Tariffs />
      </main>
      <Footer />
    </>
  );
}
