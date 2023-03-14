import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Contexto from "../Contexto";

const RutasPrivadas = ({ children }) => {
  const { logeado } = useContext(Contexto);
  return logeado ? children : <Navigate to="/login" />;
};

export default RutasPrivadas;
