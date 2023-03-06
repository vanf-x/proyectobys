import {
  faCircleCheck,
  faFileSignature,
  faGear,
  faLightbulb,
  faMedal,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
const EncontrarBusqueda = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <h1 className="text-3xl mt-20 mb-10">Encontrar Búsqueda</h1>
      {/*FORM*/}
      <form className="bg-white w-2/3 h-1/2 self-center m-10">
        {/*ARRIBA*/}
        <div className="flex h-1/2">
          {/*ARRIBA IZ*/}
          <div className="flex justify-around items-center border w-1/2 ">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faUser} />
              <input
                type="text"
                placeholder="Nombre del cliente"
                className="border-b border-black"
              />
            </div>
          </div>
          {/*ARRIBA DER*/}
          <div className="flex justify-around items-center border w-1/2 ">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faLightbulb} />
              <input
                type="text"
                placeholder="Rol"
                className="border-b border-black"
              />
            </div>
          </div>
        </div>
        {/*ABAJO*/}
        <div className="flex h-1/2">
          {/*ABAJO IZ*/}
          <div className="flex justify-around items-center border w-1/2">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faCircleCheck} />
              <input
                type="text"
                placeholder="Estado"
                className="border-b border-black"
              />
            </div>
          </div>
          {/*ABAJO DER*/}
          <div className="flex justify-around items-center border w-1/2">
            <div className="flex justify-start items-center">
              <FontAwesomeIcon className="mr-2" icon={faMedal} />
              <input
                type="text"
                placeholder="Seniority"
                className="border-b border-black"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-10">
          <div className="flex justify-around items-center  w-1/2">
            <div className="flex justify-start items-center mt-5 mb-2">
              <FontAwesomeIcon className="mr-2" icon={faGear} />
              <label for="opciones" className="mr-1">Skills: </label>
              <select id="opciones" className="border-lg bg-[#F7FEFE]">
              <option value="" disabled></option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
                <option value="opcion4">Opción 4</option>
                <option value="opcion5">Opción 5</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="Enviar"
            className="text-white bg-[#006DA4] hover:bg-[#1d6081] px-4 py-2 rounded my-2 cursor-pointer transition-colors"
          />
          <NavLink to="/menu" className="my-2 hover:underline">
            Cancelar
          </NavLink>
        </div>
      </form>
    </div>
  );
};
export default EncontrarBusqueda;
