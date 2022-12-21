import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./pages/Inicio/Inicio";
import NuestrasActividades from "./pages/NuestrasActividades/NuestrasActividades";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import QuieroAyudar from "./pages/QuieroAyudar/QuieroAyudar";
import Contacto from "./pages/Contacto/Contacto";
import Cursos from "./pages/Cursos/Cursos";

function App() {
  return (
    //JSX
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/nuestrasactividades"
            element={<NuestrasActividades />}
          />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="/quieroayudar" element={<QuieroAyudar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cursos" element={<Cursos />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
