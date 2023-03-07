import {
  faArrowRightToBracket,
  faCalendar,
  faCircleCheck,
  faClipboardList,
  faDollarSign,
  faFileContract,
  faFileSignature,
  faGear,
  faLightbulb,
  faMedal,
  faMoneyBill,
  faRightToBracket,
  faStopwatch,
  faUser,
  faUserGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
const CrearBusqueda = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-3xl mt-20 mb-10">Crear Búsqueda</h1>
      {/*FORM*/}
      <form className="bg-white w-5/6 self-center m-10">
        <div className="flex">
          {/*IZ*/}
          <div className="flex flex-col justify-around items-center  w-1/2 ">
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faUserGroup} />
              <input
                type="text"
                placeholder="Cliente"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faCalendar} />
              <input
                type="text"
                placeholder="Fecha de apertura"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faStopwatch} />
              <input
                type="text"
                placeholder="Jornada de trabajo"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faFileContract} />
              <input
                type="text"
                placeholder="Modalidad de contratación"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faClipboardList} />
              <input
                type="text"
                placeholder="Posición de trabajo"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faDollarSign} />
              <input
                type="text"
                placeholder="Remuneración"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faCircleCheck} />
              <input
                type="text"
                placeholder="Estado"
                className="border-b border-black"
              />
            </div>
          </div>
          {/*DER*/}
          <div className="flex flex-col justify-around items-center w-1/2 ">
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
              <input
                type="text"
                placeholder="Vacantes"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faLightbulb} />
              <input
                type="text"
                placeholder="Rol"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faMedal} />
              <input
                type="text"
                placeholder="Seniority"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faArrowRightToBracket} />
              <input
                type="text"
                placeholder="Link JD"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <FontAwesomeIcon className="mr-2" icon={faGear} />
              <input
                type="text"
                placeholder="Skills"
                className="border-b border-black"
              />
            </div>
            <div className="flex justify-start items-center my-4">
              <textarea
                type="text"
                placeholder="Observaciones"
                className="border-b border-black"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center m-10">
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

export default CrearBusqueda;
