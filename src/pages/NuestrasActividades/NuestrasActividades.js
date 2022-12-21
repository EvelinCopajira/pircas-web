import { Button } from "@mui/material";
import Testimonios from "../../components/Testimonios/Testimonios";
import "./NuestrasActividades.css";
import { Link } from "react-router-dom";

const NuestrasActividades = () => {
  return (
    <>
      <h1>NUESTRAS ACTIVIDADES</h1>
      <div className="container-NuestrasActividades">
        <div className="container-img-NuestrasActividades">
          <img src="/img/pircas-portada.png" alt="imagen-NuestrasActividades"></img>
        </div>
        <div className="container-texto-NuestrasActividades">
          <p>
            Brindamos talleres de formación y capacitación en oficios para que
            las personas <strong>conecten, descubran y desarrollen</strong> sus habilidades y
            puedan llevarlos a la práctica diaria y profesional en un espacio
            social, comunitario y colaborativo que fomente la circulación de
            saberes, la innovación y la creatividad.
          </p>
          <br />
          <Button className="btn-cursos"><Link to={"/cursos"}>CURSOS</Link></Button>

        </div>
      </div>
      <Testimonios />
    </>
  );
};

export default NuestrasActividades;
