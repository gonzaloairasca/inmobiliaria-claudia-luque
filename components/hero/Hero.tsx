import React from "react";

const Hero = () => {
  return (
    <main className="text-montserrat background-hero px-[16px]">
      <h3 className="text-white text-shadow text-3xl font-bold w-10/12 pt-16">
        En todo Moreno y Zona Oeste
      </h3>
      <h1 className="font-unna text-6xl font-bold text-shadow text-[#F2E205] mt-2">
        CLAUDIA LUQUE
      </h1>
      <h4 className="italic font-semibold text-white text-shadow text-xl mt-2">
        Martillera y desarrolladora inmnobiliaria.
      </h4>
      <button className="text-[#F2E205] text-xl font-bold text-shadow bg-gradient-to-r from-[#B60D12] to-[#b60d13c4] px-3 py-2 rounded-lg mt-4 mb-24">
        Buscar Propiedades
      </button>
    </main>
  );
};

export default Hero;
