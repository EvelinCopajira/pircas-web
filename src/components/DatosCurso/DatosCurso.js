import { Button } from "@mui/material";
import "./DatosCurso.css";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Link } from "react-router-dom";

const DatosCurso = () => {
  return (
    <>
      <div className="container-presentacion-curso">
        <div className="container-img-presentacion">
          <img src="/img/img-carpinteria.jpg" alt="imagen-logo" />
        </div>
        <div className="container-texto">
          <h1>CURSO DE CARPINTERÍA DE BANCO Y MADERA MACIZA</h1>
          <h3>
            Dirigido a personas mayores de 16 años sin necesidad de tener
            experiencia previa
          </h3>
          <p>INICIA AGOSTO 2023</p>
          <div className="logos-container">
            <div className="icon-container">
              <DateRangeIcon className="icon" />
              <p>PRESENCIAL</p>
              <p>4 MESES</p>
              <p>LUN O MIE</p>
              <p>18:30 - 21:30hs</p>
            </div>
            <div className="icon-container">
              <LocationOnIcon className="icon" />
              <p>ESPACIO TALLER DE OFICIOS</p>
              <p>Salta 485, Córdoba Capital, Argentina</p>
            </div>
            <div className="icon-container">
              <AddShoppingCartIcon className="icon" />
              <p>INVERSIÓN DE $8000 MENSUALES</p>
            </div>
            <div className="icon-container">
              <DesignServicesIcon className="icon" />
              <p>MATERIALES INCLUÍDOS</p>
            </div>
          </div>
          <div className="btn-datos-cursos">
            <a
              href="https://wa.me/+5493518746573"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button className="btn-inscripcion">INSCRIBIRME</Button>
            </a>

            <Button className="btn-inscripcion">
              <Link to={"/cursos"}>VOLVER A CURSOS </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosCurso;
