import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CrearPersona from "./components/CrearPersona";
import EncontrarPersona from "./components/EncontrarPersona";
import EncontrarEntrevista from "./components/EncontrarEntrevista";
import EncontrarBusqueda from "./components/EncontrarBusqueda";
import CrearEntrevista from "./components/CrearEntrevista";
import CrearBusqueda from "./components/CrearBusqueda";
import Login from "./components/Login";
import Navegador from "./components/Navegador";
import RecuperarContrasena from "./components/RecuperarContrasena";
import Menu from "./components/Menu";
import CerrarSesion from "./components/CerrarSesion";
import Eventos from "./components/Eventos";
import Provider from "./components/context/Provider";
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
