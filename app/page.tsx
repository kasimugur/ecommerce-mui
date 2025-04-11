import Image from "next/image";
import Header from "./(routes)/_components/Header";
import Hero from "./(routes)/_components/Hero";

export default function Home() {
  return (
    <>
      <div className="px-6 mb-12">
        <Header />
      
      <Hero />
      </div>
    </>
  );
}
