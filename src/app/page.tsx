import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import {
  Banner,
  Categories,
  Featured,
  Intro,
  Statement,
  Visit,
} from "@/components/home/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Featured />
      <Banner />
      <Statement />
      <Categories />
      <Visit />
    </>
  );
}
