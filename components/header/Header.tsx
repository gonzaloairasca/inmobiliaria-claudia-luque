import React from "react";
import logo from "./logo-luque.png";
import menu from "./menu.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="font-montserrat flex justify-between bg-[#B60D12]">
      <Image
        src={logo}
        alt="logo inmobiliaria claudia luque, en todo moreno y zona oeste"
        className="w-28"
      />
      <Image src={menu} alt="icono menu" className="mr-4" />
    </header>
  );
};

export default Header;
