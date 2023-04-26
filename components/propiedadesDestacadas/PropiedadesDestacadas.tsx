/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "../cardPropiedad/Card";
import { properties } from "../buscadorDePropiedades/properties";

const PropiedadesDestacadas = () => {
  return (
    <section className="font-montserrat xl:max-w-screen-full sm:px-[16px] xl:px-[100px] mx-auto md:pt-6 md:pb-16">
      <h2 className="font-montserrat font-bold text-[#F2E205] text-2xl text-center xl:text-left xl:text-3xl my-6">
        PROPIEDADES DESTACADAS
      </h2>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:max-w-4xl xl:px-0 xl:grid-cols-4 xl:max-w-full mx-auto	 ">
        {properties.map((propiedad) => (
          <Card {...propiedad} key={propiedad.title} />
        ))}
      </div>
    </section>
  );
};

export default PropiedadesDestacadas;
