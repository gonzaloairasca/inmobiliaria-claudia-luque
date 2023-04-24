import React from "react";
import InfoContacto from "./infoContacto/InfoContacto";
import Formulario from "./formulario/Formulario";
import Redes from "../redes/Redes";

const Contacto = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:justify-around ">
      <Formulario />
      <div className=" flex flex-col">
        <InfoContacto />
        <div className="py-4 mb-16 mx-auto">
          <Redes celeste={true} />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
