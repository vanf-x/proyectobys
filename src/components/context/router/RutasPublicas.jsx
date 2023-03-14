import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Contexto from "../Contexto";

const RutasPublicas = ({ children }) => {
  const { logeado } = useContext(Contexto);
  return !logeado ? children : <Navigate to="/" />;
};

export default RutasPublicas;
