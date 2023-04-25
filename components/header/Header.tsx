import React from "react";
import logo from "./logo-luque.png";
import menu from "./menu.svg";
import Image from "next/image";
import Link from "next/link";
import InfoHeader from "../infoHeader/InfoHeader";
const Header = () => {
  return (
    <header className="font-montserrat bg-[#B60D12] grid grid-cols-2 md:grid-cols-3  ">
      <div className="hidden md:block col-span-3">
        <InfoHeader />
      </div>
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo inmobiliaria claudia luque, en todo moreno y zona oeste"
          className="w-28 py-1 lg:ml-4"
        />
      </Link>
      <Image
        src={menu}
        alt="icono menu"
        className="mr-4 w-8 md:hidden justify-self-end place-self-center "
      />
      <nav className="justify-self-end place-self-center col-span-2">
        <ul className="font-bold text-[#F2E205] md:text-xs lg:text-base md:flex items-center hidden gap-7 mr-12">
          <li>
            <Link href={"/"}>INCIO</Link>
          </li>
          <li>
            <Link href={"/"}>BUSCAR PROPIEDADES</Link>
          </li>
          <li>
            <Link href={"/"}>SOBRE NOSOTROS</Link>
          </li>
          <li>
            <Link href={"/"}>CONTACTO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
