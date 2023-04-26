/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "../cardPropiedad/Card";

const PropiedadesDestacadas = () => {
  const propiedadesDestacadas = [
    {
      kindOfProperty: "Casa",
      type: "Alquiler",
      title: "Casa 240m2 1",
      price: "$250.000.00",
      location: "Country San Diego, Moreno, Buenos Aires.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim rerum nulla. Doloremque sed quaerat similique velit ratione eaque eveniet fugit pariatur neque! Nisi rerum vero esse sint quis! Nihil?",
      image:
        "https://static1.sosiva451.com/58705021/f479d2a7-acb7-4b18-a478-d7a037fa836c_u_small.jpg",
      dormitorios: 2,
      baños: 2,
      superficie: "240m2",
    },
    {
      kindOfProperty: "Casa",
      type: "Alquiler",
      title: "Casa 240m2 2",
      price: "$250.000.00",
      location: "Country San Diego, Moreno, Buenos Aires.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim rerum nulla. Doloremque sed quaerat similique velit ratione eaque eveniet fugit pariatur neque! Nisi rerum vero esse sint quis! Nihil?",
      image:
        "https://static1.sosiva451.com/58705021/f479d2a7-acb7-4b18-a478-d7a037fa836c_u_small.jpg",
      dormitorios: 2,
      baños: 2,
      superficie: "240m2",
    },
    {
      kindOfProperty: "Casa",
      type: "Alquiler",
      title: "Casa 240m2 3",
      price: "$250.000.00",
      location: "Country San Diego, Moreno, Buenos Aires.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim rerum nulla. Doloremque sed quaerat similique velit ratione eaque eveniet fugit pariatur neque! Nisi rerum vero esse sint quis! Nihil?",
      image:
        "https://static1.sosiva451.com/58705021/f479d2a7-acb7-4b18-a478-d7a037fa836c_u_small.jpg",
      dormitorios: 2,
      baños: 2,
      superficie: "240m2",
    },
    {
      kindOfProperty: "Terreno",
      type: "Venta",
      title: "Casa 240m2 4",
      price: "$250.000.00",
      location: "Country San Diego, Moreno, Buenos Aires.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim rerum nulla. Doloremque sed quaerat similique velit ratione eaque eveniet fugit pariatur neque! Nisi rerum vero esse sint quis! Nihil?",
      image:
        "https://static1.sosiva451.com/58705021/f479d2a7-acb7-4b18-a478-d7a037fa836c_u_small.jpg",
      dormitorios: 2,
      baños: 2,
      superficie: "240m2",
    },
  ];
  return (
    <section className="font-montserrat xl:max-w-screen-full sm:px-[16px] xl:px-[100px] mx-auto md:pt-6 md:pb-16">
      <h2 className="font-montserrat font-bold text-[#F2E205] text-2xl text-center xl:text-left xl:text-3xl my-6">
        PROPIEDADES DESTACADAS
      </h2>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:max-w-4xl xl:px-0 xl:grid-cols-4 xl:max-w-full mx-auto	 ">
        {propiedadesDestacadas.map((propiedad) => (
          <Card propiedad={propiedad} key={propiedad.title} />
        ))}
      </div>
    </section>
  );
};

export default PropiedadesDestacadas;
