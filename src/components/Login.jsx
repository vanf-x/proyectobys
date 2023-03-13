import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logoGyl from "../assets/img/logoGyl.png";
import "./login.css";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import {
  Route,
  Link,
  BrowserRouter as Redirect,
  Navigate,
} from "react-router-dom";

function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  // TEMPORAL
  const validarUsuario = (email) => {
    if (email != undefined) {
      if (email === "prueba@gylgroup.com") {
        return true;
      }
    }
    return false;
  };

  const validarContrasenia = (contrasenia) => {
    if (contrasenia != undefined) {
      if (contrasenia === "Hola1") {
        return true;
      }
    }
    return false;
  };

  const onSubmit = (values) => {

    
    console.log(values.email)
    console.log(values.contrasenia)
    if(validarUsuario(values.email && validarContrasenia(values.contrasenia))){
      <Redirect to="/menu" />
    }else{
      <Redirect to="/login" />
      alert("Los datos ingresados no son válidos, inténtelo nuevamente.")
    }
 };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      contrasenia: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="flex justify-center h-screen w-screen items-center bg-gradient-to-r from-cyan-900 to-cyan-700">
      <div className="text-center border-4 border-gray-500 flex flex-col justify-center w-2/3 md:w-1/3 h-3/4 bg-white rounded-xl">
        <div>
          <img src={logoGyl} width="150px" className="logo"></img>
          <h1 className="my-3 text-xs text-gray-600">
            Inicia sesión en tu cuenta
          </h1>
          <form
            className="flex flex-col justify-center items-center "
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              id="email"
              placeholder="Usuario"
              className={
                errors.email && touched.email
                  ? "bg-gray-100 my-5 w-3/4 rounded-md p-1 pl-1 border-b-2 border-[#F40505]"
                  : "bg-gray-100 my-5 w-3/4 rounded-md p-1 pl-1 border-b-2 border-[#1d6081]"
              }
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="text-red-600 text-xs">{errors.email}</p>
            )}

            <input
              type="password"
              id="contrasenia"
              placeholder="Contraseña"
              className={
                errors.contrasenia && touched.contrasenia
                  ? "bg-gray-100 my-5 w-3/4 rounded-md p-1 pl-1 border-b-2 border-[#F40505]"
                  : "bg-gray-100 my-5 w-3/4 rounded-md p-1 pl-1 border-b-2 border-[#1d6081]"
              }
              value={values.contrasenia}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.contrasenia && touched.contrasenia && (
              <p className="text-red-600 text-xs ">{errors.contrasenia}</p>
            )}

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
              
            </div>
            
            <Link
              to="/menu"
              className="bg-[#006DA4] text-white text-lg hover:bg-[#1d6081] transition-colors mt-10 w-2/5 p-2 rounded-xl"
            >
              Ingresar
            </Link>
            {/*
            <button
              type="submit"
              className="bg-[#006DA4] text-white text-lg hover:bg-[#1d6081] transition-colors mt-10 w-2/5 p-2 rounded-xl"
            >
            
              Ingresar
          </button>
          */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
