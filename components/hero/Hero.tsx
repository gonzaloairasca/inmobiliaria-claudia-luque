import React from "react";

const Hero = () => {
  return (
    <main className="text-montserrat background-hero px-[16px] min-h-[90vh] ">
      <h3 className="text-white text-shadow text-4xl font-bold w-11/12 pt-20 ">
        En todo Moreno y Zona Oeste
      </h3>
      <h1 className="font-unna text-7xl  font-bold text-shadow text-[#F2E205] mt-4">
        CLAUDIA LUQUE
      </h1>
      <h4 className="italic font-semibold text-white text-shadow text-2xl mt-3 w-11/12">
        Martillera y desarrolladora inmnobiliaria.
      </h4>
      <button className="text-[#F2E205] text-2xl font-bold text-shadow box-shadow bg-gradient-to-r from-[#B60D12] to-[#b60d13c4] px-4 py-[15px] rounded-lg mt-6">
        Buscar Propiedades
      </button>
    </main>
  );
};

export default Hero;
