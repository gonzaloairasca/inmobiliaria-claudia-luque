import React from "react";
import Image from "next/image";
import logo from "../header/logo-luque.png";

const Footer = () => {
  return (
    <footer className="bg-[#B60D12] text-[#F2E205] font-montserrat text-center">
      <div className="pt-4">
        <Image
          src={logo}
          width={120}
          height={120}
          alt="logo claudia luque"
          className="mx-auto py-2"
        />
        <h2 className="text-xl font-bold ">Inmobiliaria Claudia Luque</h2>
      </div>
      <div className="">
        <h3 className="my-2 font-light">España 302 - Moreno, Buenos Aires.</h3>
        <h3 className="my-2 font-light">Tel: +94838 4930 </h3>
        <h3 className="my-2 font-light">Email: claudialuque@gmail.com</h3>
        <h3 className="text-lg font-bold pb-4">
          CLAUDIA LUQUE INMOBILIARIA © 2023
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
