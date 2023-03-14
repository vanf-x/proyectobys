import React from "react";
import { Route, Routes } from "react-router-dom";
import Privado from "./Privado";
import Login from "../../Login";
import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";
const Publico = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <RutasPublicas>
              <Login />
            </RutasPublicas>
          }
        />
        <Route
          path="/*"
          element={
            <RutasPrivadas>
              <Privado />
            </RutasPrivadas>
          }
        />
      </Routes>
    </>
  );
};

export default Publico;
