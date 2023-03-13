import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import CrearPersona from "./components/Crear/CrearPersona";
import EncontrarPersona from "./components/Encontrar/EncontrarPersona";
import ListarPersona from "./components/ListarPersona";
import EncontrarEntrevista from "./components/Encontrar/EncontrarEntrevista";
import EncontrarBusqueda from "./components/Encontrar/EncontrarBusqueda";
import CrearEntrevista from "./components/Crear/CrearEntrevista";
import CrearBusqueda from "./components/Crear/CrearBusqueda";
import Login from "../src/Pages/pageLogin/Login";
import Navegador from "./components/Navegador";
import RecuperarContrasena from "./Pages/pageLogin/RecuperarContrasena";
import Menu from "./Pages/pageMenu/Menu";
import CerrarSesion from "./Pages/pageMenu/CerrarSesion";
import Eventos from "./components/Eventos";
import Provider from "./context/Provider";
function App() {
  return (
    <Provider>
      <>
        <BrowserRouter>
          <Navegador />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/persona/crear" element={<CrearPersona />} />
            <Route path="/persona/encontrar" element={<EncontrarPersona />} />
            <Route path="/persona/listado" element={<ListarPersona />} />
            <Route path="/busqueda/crear" element={<CrearBusqueda />} />
            <Route path="/busqueda/encontrar" element={<EncontrarBusqueda />} />
            <Route path="/entrevista/crear" element={<CrearEntrevista />} />
            <Route
              path="/entrevista/encontrar"
              element={<EncontrarEntrevista />}
            />
            <Route path="/entrevista/eventos" element={<Eventos />} />
            <Route path="/recuperacion" element={<RecuperarContrasena />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/logout" element={<CerrarSesion />} />
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
