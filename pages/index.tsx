import { Inter } from "next/font/google";
import Hero from "@/components/hero/Hero";
import CallToAction from "@/components/CallToAction/CallToAction";
import PropiedadesDestacadas from "@/components/propiedadesDestacadas/PropiedadesDestacadas";
import SobreNosotros from "@/components/sobreNosotros/SobreNosotros";
import Contacto from "@/components/contacto/Contacto";
import Mapa from "@/components/mapa/Mapa";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <PropiedadesDestacadas />
      <SobreNosotros />
      <Contacto />
      <Mapa />
    </>
  );
}
