import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoGyl from "../assets/img/logoGyl.png";

const Navegador = () => {
  const [showPersonaMenu, setShowPersonaMenu] = useState(false);
  const [showBusquedaMenu, setShowBusquedaMenu] = useState(false);
  const [showEntrevistaMenu, setShowEntrevistaMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);


  const handlePersonaMenuHover = () => {
    setShowPersonaMenu(true);
  };

  const handlePersonaMenuLeave = () => {
    setShowPersonaMenu(false);
  };

  const handleBusquedaMenuHover = () => {
    setShowBusquedaMenu(true);
  };

  const handleBusquedaMenuLeave = () => {
    setShowBusquedaMenu(false);
  };

  const handleEntrevistaMenuHover = () => {
    setShowEntrevistaMenu(true);
  };

  const handleEntrevistaMenuLeave = () => {
    setShowEntrevistaMenu(false);
  };

  const handleUserMenuHover = () => {
    setShowUserMenu(true);
  };

  const handleUserMenuLeave = () => {
    setShowUserMenu(false);
  };
  return (
    <div className="bg-[#CAF1F0] flex justify-around items-center py-2 shadow-md">
      <NavLink to="/menu">
      <img src={logoGyl} width="60px"></img>
      </NavLink>
      <h1
        className="font-bold cursor-pointer relative"
        onMouseEnter={handlePersonaMenuHover}
        onMouseLeave={handlePersonaMenuLeave}
      >
        Persona
        <FontAwesomeIcon  className="ml-2" icon={faCaretDown}/>
        {showPersonaMenu && (
          <div className="absolute bg-white py-2 w-40 shadow-md">
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100"
              to="/persona/crear"
            >
              Crear
            </NavLink>
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100"
              to="/persona/encontrar"
            >
              Encontrar
            </NavLink>
          </div>
        )}
      </h1>
      <h1
        className="font-bold cursor-pointer relative"
        onMouseEnter={handleBusquedaMenuHover}
        onMouseLeave={handleBusquedaMenuLeave}
      >
        Búsqueda
        <FontAwesomeIcon  className="ml-2" icon={faCaretDown}/>
        {showBusquedaMenu && (
          <div className="absolute bg-white py-2 w-40 shadow-md">
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100"
              to="/busqueda/crear"
            >
              Crear
            </NavLink>
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100"
              to="/busqueda/encontrar"
            >
              Encontrar
            </NavLink>
          </div>
        )}
      </h1>
      <h1
        className="font-bold cursor-pointer relative"
        onMouseEnter={handleEntrevistaMenuHover}
        onMouseLeave={handleEntrevistaMenuLeave}
      >
        Entrevista
        <FontAwesomeIcon  className="ml-2" icon={faCaretDown}/>
        {showEntrevistaMenu && (
          <div className="absolute bg-white py-2 w-40 shadow-md">
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100"
              to="/entrevista/crear"
            >
              Crear
            </NavLink>
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100"
              to="/entrevista/encontrar"
            >
              Encontrar
            </NavLink>
            <NavLink
              className="block px-4 py-2 hover:bg-gray-100"
              to="/entrevista/eventos"
            >
              Eventos
            </NavLink>
          </div>
        )}
      </h1>
      <h1
        className="font-bold cursor-pointer relative text-[#006DA4] py-2 px-4"
        onMouseEnter={handleUserMenuHover}
        onMouseLeave={handleUserMenuLeave}
      >
        <FontAwesomeIcon  className="mr-2" icon={faUser}/>

        Florencia
        <FontAwesomeIcon  className="ml-2 text-black" icon={faCaretDown}/>
        {showUserMenu && (
          <div className="absolute bg-white py-2 w-40 shadow-md">
            <NavLink
              className="block px-4  hover:bg-gray-100 text-black"
              to="/logout"
            >
              Cerrar Sesión
            </NavLink>

          </div>
        )}
      </h1>
    </div>
  );
};
export default Navegador