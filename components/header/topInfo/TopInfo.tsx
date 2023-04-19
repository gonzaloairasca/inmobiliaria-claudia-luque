import React from "react";
import Image from "next/image";
import wsp from "./wsp.png";

const TopInfo = () => {
  return (
    <div className="bg-[#F2E205] text-[#B60D12]">
      <ul className="flex">
        <li className="flex items-center">
          <Image src={wsp} alt="whatsapp logo" className="w-4 h-4" />
          <h6 className="text-[10px]">+2346 346393459</h6>
        </li>
        <li className="flex items-center">
          <Image src={wsp} alt="whatsapp logo" className="w-4 h-4" />
          <h6 className="text-[10px]">claudialuque@gmail.com</h6>
        </li>
        <li className="flex items-center">
          <Image src={wsp} alt="whatsapp logo" className="w-4 h-4" />
          <h6 className="text-[10px]">España 302 - Moreno, Buenos Aires.</h6>
        </li>
      </ul>
    </div>
  );
};

export default TopInfo;
