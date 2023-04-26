import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="text-montserrat background-hero px-[16px] min-h-[90vh] xl:px-[100px] xl:pb-20 ">
      <h3 className="text-white text-shadow text-4xl font-bold w-11/12 xl:w-7/12 pt-20 xl:text-7xl xl:pt-10 ">
        En todo Moreno y Zona Oeste
      </h3>
      <h1 className="font-unna text-7xl  font-bold text-shadow text-[#F2E205] mt-4 xl:text-[90px]">
        CLAUDIA LUQUE
      </h1>
      <h4 className="italic font-regular text-white text-shadow text-2xl mt-3 w-11/12 xl:w-6/12 xl:text-4xl">
        Martillera y desarrolladora inmnobiliaria.
      </h4>
      <Link href={"/propiedades"}>
        <button className="text-[#F2E205] text-2xl font-bold text-shadow box-shadow bg-gradient-to-r from-[#B60D12] to-[#b60d13c4] px-4 pt-[9px] pb-[12px]  rounded mt-6">
          Buscar Propiedades
        </button>
      </Link>
    </main>
  );
};

export default Hero;
