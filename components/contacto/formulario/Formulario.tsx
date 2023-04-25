import React, { ChangeEvent } from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_okornc9",
        "template_c25yuae",
        form.current,
        "UnRhwKV7_QkI4hiAt"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("enviado con exito");
          setName("");
          setEmail("");
          setConsulta("");
          alert(
            "Tu consulta fue enviada con éxito! Gracias por comunicarte, en breve obtendrás respuesta."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className=" font-montserrat flex flex-col items-center scroll-m-20 lg:flex-row lg:justify-center "
      id="contacto"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" pt-4 pb-10 px-6 sm:max-w-md w-full "
      >
        <h2 className="text-3xl font-bold py-8 text-[#B60D12]">CONTACTO</h2>
        <label htmlFor="user_name" className="text-[#B60D12] font-bold">
          Nombre:
        </label>
        <input
          required
          className="focus:outline-none bg-[#D9D9D9] w-full pb-2 my-3 pt-1 pl-2 placeholder-gray-500"
          type="text"
          name="user_name"
          placeholder="Nombre y Apellido"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="user_email" className="text-[#B60D12] font-bold">
          Email:
        </label>
        <input
          required
          type="email"
          name="user_email"
          placeholder="ejemplo@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="focus:outline-none w-full pb-2 pt-1 pl-2 my-3 bg-[#D9D9D9] placeholder-gray-500"
        />
        <label htmlFor="message" className="text-[#B60D12] font-bold">
          Consulta:
        </label>
        <textarea
          required
          name="message"
          onChange={(e) => setConsulta(e.target.value)}
          value={consulta}
          placeholder="Escriba aqui su consulta"
          className="focus:outline-none border  w-full pb-16 px-3 pt-2 bg-[#D9D9D9] placeholder-gray-500 my-3"
        />
        <button
          type="submit"
          value="send"
          className="py-3 px-4 rounded-lg  sm:w-56 text-[#F2E205] bg-[#B60D12]  active:py-4 text-lg font-semibold "
        >
          Enviar consulta
        </button>
      </form>
    </div>
  );
};

export default Formulario;
