import React from "react";
import CrearPersona from "../../CrearPersona";
import EncontrarPersona from "../../EncontrarPersona";
import ListarPersona from "../../ListarPersona";
import CrearBusqueda from "../../CrearBusqueda";
import EncontrarBusqueda from "../../EncontrarBusqueda";
import CrearEntrevista from "../../CrearEntrevista";
import EncontrarEntrevista from "../../EncontrarEntrevista";
import Eventos from "../../Eventos";
import Menu from "../../Menu";
import CerrarSesion from "../../CerrarSesion";
import Navegador from "../../Navegador";
import { Navigate, Route, Routes } from "react-router-dom";
const Privado = () => {
  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/persona/crear" element={<CrearPersona />} />
        <Route path="/persona/encontrar" element={<EncontrarPersona />} />
        <Route path="/persona/listado" element={<ListarPersona />} />
        <Route path="/busqueda/crear" element={<CrearBusqueda />} />
        <Route path="/busqueda/encontrar" element={<EncontrarBusqueda />} />
        <Route path="/entrevista/crear" element={<CrearEntrevista />} />
        <Route path="/entrevista/encontrar" element={<EncontrarEntrevista />} />
        <Route path="/entrevista/eventos" element={<Eventos />} />
        <Route path="/logout" element={<CerrarSesion />} />
      </Routes>
    </>
  );
};

export default Privado;
