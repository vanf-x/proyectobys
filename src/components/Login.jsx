import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoGyl from "../assets/img/logoGyl.png";
import "./login.css";
function Login() {
  //const [usuario, setUsuario] = useState("");
  //const [contrasenia, setContrasenia] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="flex justify-center h-screen w-screen items-center bg-gradient-to-r from-cyan-900 to-cyan-700">
      <div className="text-center border-4 border-gray-500 flex flex-col justify-center w-2/3 md:w-1/3 h-3/4 bg-white rounded-xl">
        <div>
          <img src={logoGyl} width="150px" className="logo"></img>
          <h1 className="my-3 text-xs text-gray-600">
            Inicia sesión en tu cuenta
          </h1>
          <form className="flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Usuario"
              className="bg-gray-100 my-5 w-3/4 rounded-md p-1 pl-1 border-b-2 border-[#1d6081]"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-gray-100 my-5 w-3/4 rounded-md p-1 pl-1 border-b-2 border-[#1d6081]"
            />
            <div className="flex justify-around text-xs w-full my-3">
              <div className="flex">
              <input
              className="mr-2"
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Recordarme</label>
              </div>
              <Link to="/recuperacion" className="text-[#006DA4]">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Link
              to="/menu"
              className="bg-[#006DA4] text-white text-lg hover:bg-[#1d6081] transition-colors mt-10 w-2/5 p-2 rounded-xl"
            >
              Ingresar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
