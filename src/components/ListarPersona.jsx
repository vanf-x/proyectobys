import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Contexto from "../context/Contexto";
const ListadoPersona = () => {
  const contexto = useContext(Contexto);
  contexto.empleados.forEach((e) => {
    console.log("Nombre: " + e.nombre + "Apellido: " + e.apellido);
  });

  const [empleados, setEmpleados] = useState([
    { nombre: "Héctor", apellido: "Sánchez" },
    { nombre: "Lautaro", apellido: "Montaño" },
    { nombre: "Carla", apellido: "Márquez" },
  ]);

  const mostrarEmpleados = () => {
    return (
      <div>
        {empleados.map((e, index) => {
          <div key={index}>
            <h1>{e.nombre}</h1>
            <h1>{e.apellido}</h1>
          </div>;
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl my-5">Listado de personas</h1>
        {mostrarEmpleados}
      </div>
      <NavLink to="/persona/encontrar">
        <h1 className="text-[#006DA4] m-5 hover:underline transition-all">
          Volver a Encontrar
        </h1>
      </NavLink>
    </div>
  );
};

export default ListadoPersona;
