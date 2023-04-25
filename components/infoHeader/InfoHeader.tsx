import React from "react";
import email from "./email.svg";
import wsp from "./whatsapp.svg";
import ubicacion from "./ubicacion.svg";
import Image from "next/image";

const InfoHeader = () => {
  return (
    <div className="bg-[#F2E205]">
      <ul className="flex justify-end gap-8 text-xs text-[#B60D12] mr-4">
        <li className="flex items-center gap-1">
          <Image src={email} alt="email" width={17} height={17} />
          <h4>claudialuque@gmail.com</h4>
        </li>
        <li className="flex items-center gap-1">
          <Image src={ubicacion} alt="ubicacion" width={13} height={13} />
          <h4>España 302 - Moreno, Buenos Aires.</h4>
        </li>
        <li className="flex items-center gap-1">
          <Image src={wsp} width={15} height={15} alt="whatsapp icon" />
          <h4>+34882 8238383</h4>
        </li>
      </ul>
    </div>
  );
};

export default InfoHeader;
