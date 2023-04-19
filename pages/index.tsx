import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero/Hero";
import CallToAction from "@/components/CallToAction/CallToAction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
    </>
  );
}
