import Multiplica from "../../components/Multiplica2/Multiplica2";
import "./Cursos.css";

const Cursos = () => {
  return (
    <>
      <div className="cursos-container">
        <div className="cursos">
          <div className="container-img-cursos">
            <img src="/img/logo-pircas.png" alt="imagen-portada"></img>
          </div>
          <div>
            <h2>Un espacio para descubrir y conectar con tus habilidades</h2>
            <h2>¿Qué estás esperando para capacitarte vos también?</h2>
          </div>
        </div>
        <Multiplica />
      </div>
    </>
  );
};

export default Cursos;
