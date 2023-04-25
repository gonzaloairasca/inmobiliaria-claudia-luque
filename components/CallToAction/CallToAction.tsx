import React from "react";

const CallToAction = () => {
  return (
    <section className=" bg-[#B60D12] text-[#F2E205] font-montserrat font-bold text-center text-xl md:text-2xl py-10 xl:pb-[3.9rem] xl:pt-14">
      <h2 className="lg:text-3xl xl:text-5xl">
        ¿Estas pensando comprar o alquilar?
      </h2>
      <h2 className="lg:text-3xl xl:text-5xl xl:mt-3">
        ¡Usá nuestro buscador!
      </h2>
      <button className="border rounded border-[#F2E205] py-2 px-3 xl:py-3 xl:px-5 mt-4 box-shadow xl:mt-7">
        Buscar propiedades
      </button>
    </section>
  );
};

export default CallToAction;
