import React, { useState } from "react";
import Contexto from "./Contexto";
const Provider = ({ children }) => {
  const [persona, setPersona] = useState({});
  const [empleados, setEmpleados] = useState([
    { nombre: "Héctor", apellido: "Sánchez" },
    { nombre: "Lautaro", apellido: "Montaño" },
    { nombre: "Carla", apellido: "Márquez" },
    { nombre: "Belén", apellido: "Oña" },
    { nombre: "Jasbir", apellido: "Singh" },
    { nombre: "Damián", apellido: "Bettini" },
    { nombre: "Sharon", apellido: "Ostrovsky" },
    { nombre: "Max", apellido: "Sauerbrey" },
    { nombre: "Dalma", apellido: "Ponce" },
    { nombre: "Facundo", apellido: "Aguirre" },
    { nombre: "Marcos", apellido: "Aguero" },
    { nombre: "Mirna", apellido: "Diaz" },
  ]);
  const [skill, setSkill] = useState([
    "Java", "JavaScript"
  ])
  return (
    <Contexto.Provider value={{ empleados, setEmpleados, persona, setPersona, skill, setSkill }}>
      {children}
    </Contexto.Provider>
  );
};
export default Provider;
