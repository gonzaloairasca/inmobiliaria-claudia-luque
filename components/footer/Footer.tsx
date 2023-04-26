import React from "react";
import Image from "next/image";
import logo from "../header/logo-luque.png";
import Redes from "../redes/Redes";

const Footer = () => {
  return (
    <footer className="bg-[#B60D12] text-[#F2E205] font-montserrat text-center xl:flex xl:justify-center xl:items-center xl:gap-40 xl:pb-5">
      <div className="pt-4">
        <Image
          src={logo}
          width={120}
          height={120}
          alt="logo claudia luque"
          className="mx-auto w-auto py-2 xl:hidden"
        />
        <Image
          src={logo}
          width={250}
          height={250}
          alt="logo claudia luque"
          className="mx-auto w-auto  py-2 hidden xl:block"
        />
        <h2 className="text-xl font-bold xl:hidden ">
          Inmobiliaria Claudia Luque
        </h2>
        <h3 className="text-medium font-bold pb-4 hidden xl:block">
          CLAUDIA LUQUE INMOBILIARIA © 2023
        </h3>
      </div>
      <div className=" lg:text-left xl:mt-10">
        <h2 className="text-xl font-bold hidden xl:block xl:mb-2 ">
          Inmobiliaria Claudia Luque
        </h2>
        <h3 className="my-2 font-light">España 302 - Moreno, Buenos Aires.</h3>
        <h3 className="my-2 font-light">Tel: +94838 4930 </h3>
        <h3 className="my-2 font-light">Email: claudialuque@gmail.com</h3>
        <div className="hidden xl:block mt-4">
          <Redes amarillo={true} />
        </div>
        <h3 className="text-lg font-bold pb-4 xl:hidden">
          CLAUDIA LUQUE INMOBILIARIA © 2023
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
