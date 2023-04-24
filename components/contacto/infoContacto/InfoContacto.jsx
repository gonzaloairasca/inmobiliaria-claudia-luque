import React from "react";
import celular from "./whatsapp.svg";
import email from "./email.svg";
import ubicacion from "./ubicacion.svg";
import telefono from "./telefono.svg";
import Image from "next/image";

const InfoContacto = () => {
  return (
    <div className="w-full mt-10 lg:mt-[9rem]">
      <ul className="bg-[#B60D12] text-[#F2E205]  flex flex-col gap-8 px-5 py-8 m-3 lg:px-10 rounded-lg">
        <li className="flex items-center gap-3">
          <div className="rounded-full bg-white p-4 border-4 border-[#F2E205]">
            <Image
              src={email}
              alt="logo ubicacion"
              height={30}
              width={30}
              priority
            />
          </div>
          <div>
            <h5 className=" text-lg font-semibold">Contacto directo</h5>
            <p>351 5937318</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="rounded-full bg-white p-4  border-4 border-[#F2E205]">
            <Image
              src={ubicacion}
              alt="logo ubicacion"
              height={30}
              width={30}
              priority
            />
          </div>
          <div>
            <h5 className=" text-lg font-semibold">Correo Electronico</h5>
            <p className="">claudialuque@gmail.com</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="rounded-full bg-white p-4 border-4  border-[#F2E205]">
            <Image
              src={celular}
              alt="logo ubicacion"
              height={30}
              width={30}
              priority
            />
          </div>
          <div>
            <h5 className=" text-lg font-semibold">Ubicación</h5>
            <p className="">España 302 - Moreno, Buenos Aires.</p>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="rounded-full bg-white p-4 border-4  border-[#F2E205]">
            <Image
              src={telefono}
              alt="logo ubicacion"
              height={30}
              width={30}
              priority
            />
          </div>
          <div>
            <h5 className=" text-lg font-semibold">Teléfono</h5>
            <p className=" ">+34882 8238383</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InfoContacto;
