/* eslint-disable @next/next/no-img-element */
import React from "react";
import wsp from "./whatsapp.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import instagramAmarillo from "./instagramAmarillo.svg";
import facebookAmarillo from "./facebookAmarillo.svg";
import wspAmarillo from "./whatsappAmarillo.svg";

import Image from "next/image";

const Redes = ({ amarillo }) => {
  return (
    <ul className="flex gap-4 md:mr-4">
      <li>
        <a href="https://www.instagram.com/aguaslahilda" target="_blank">
          <Image
            src={amarillo ? instagramAmarillo : instagram}
            width={20}
            height={20}
            priority
            alt="logo instagram"
            className="w-auto"
          />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/AguasLaHilda" target="_blank">
          <Image
            src={amarillo ? facebookAmarillo : facebook}
            width={11}
            height={11}
            priority
            alt="logo instagram"
            className="w-auto"
          />
        </a>
      </li>
      <li>
        <a
          href="https://api.whatsapp.com/send?phone=+5493515937318&text=Hola,%20quiero%20realizar%20una%20consulta"
          target="_blank"
        >
          <Image
            src={amarillo ? wspAmarillo : wsp}
            width={20}
            height={20}
            priority
            alt="logo instagram"
            className="w-auto"
          />
        </a>
      </li>
    </ul>
  );
};

export default Redes;
