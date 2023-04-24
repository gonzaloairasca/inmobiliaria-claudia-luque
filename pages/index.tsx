import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/hero/Hero";
import CallToAction from "@/components/CallToAction/CallToAction";
import PropiedadesDestacadas from "@/components/propiedadesDestacadas/PropiedadesDestacadas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <PropiedadesDestacadas />
    </>
  );
}
