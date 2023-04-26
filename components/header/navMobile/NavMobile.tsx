import React from "react";
import Link from "next/link";
const NavMobile = ({ nav, setNav }: any) => {
  return (
    <nav
      className={
        nav
          ? "absolute top-[5.5rem] right-0 left-0 bg-[#B60D12] text-[#F2E205]  rounded-b animacionEntrada "
          : "absolute top-[5.5rem] right-0 left-0 bg-[#B60D12] text-[#F2E205]  rounded-b"
      }
    >
      <ul className="text-lg ml-4 text-center  ">
        <li className="my-3">
          <Link href={"/"} onClick={() => setNav(!nav)}>
            INICIO
          </Link>
        </li>
        <li className="my-3">
          <Link href={"/propiedades"} onClick={() => setNav(!nav)}>
            BUSCAR PROPIEDADES
          </Link>
        </li>
        <li className="my-3">
          <Link href={"/"} onClick={() => setNav(!nav)}>
            SOBRE NOSOTROS
          </Link>
        </li>
        <li className="my-3">
          <Link href={"/#contacto"} onClick={() => setNav(!nav)}>
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
