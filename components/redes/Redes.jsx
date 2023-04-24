/* eslint-disable @next/next/no-img-element */
import React from "react";
import wsp from "./whatsapp.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import Image from "next/image";

const Redes = ({ celeste }) => {
  return (
    <ul className="flex gap-4 md:mr-4">
      <li>
        <a href="https://www.instagram.com/aguaslahilda" target="_blank">
          <Image
            src={instagram}
            width={25}
            height={25}
            priority
            alt="logo instagram"
          />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/AguasLaHilda" target="_blank">
          <Image
            src={facebook}
            width={14}
            height={14}
            priority
            alt="logo instagram"
          />
        </a>
      </li>
      <li>
        <a
          href="https://api.whatsapp.com/send?phone=+5493515937318&text=Hola,%20quiero%20realizar%20una%20consulta"
          target="_blank"
        >
          <Image
            src={wsp}
            width={25}
            height={25}
            priority
            alt="logo instagram"
          />
        </a>
      </li>
    </ul>
  );
};

export default Redes;
