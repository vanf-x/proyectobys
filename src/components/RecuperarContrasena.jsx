import React from "react";
import { Link } from "react-router-dom";
const RecuperarContrasena = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-screen">
      <div className="flex flex-col  p-3 shadow">
        <h1 className="uppercase text-center my-3">Recupera tu E-mail o contraseña</h1>
        <h2 className="my-3">Cambia tu contraseña</h2>
        <h3 className="my-3">Indica tu correo electrónico y sigue las instrucciones que se envían por correo</h3>
        <form className="flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Ingresa tu email"
              className="bg-gray-100 my-5 w-3/4 rounded-md p-1 pl-1 border-b-2 border-[#1d6081]"
            />
            <Link
              to="/menu"
              className="bg-[#006DA4] text-white text-lg hover:bg-[#1d6081] transition-colors mt-10 w-2/5 p-2 rounded-xl text-center"
            >
              Enviar
            </Link>
          </form>
      </div>
    </div>
  );
};

export default RecuperarContrasena;
