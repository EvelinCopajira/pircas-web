import "./ContenidosCurso.css";

const ContenidosCurso = () => {
  return (
    <>
      <div className="contenido-curso-container">
        <div className="contenido">
          <h3>CONTENIDO</h3>
          <ol>
            <li>La madera</li>
            <li>Herramientas básicas y sus características</li>
            <li>Uniones y ensambles</li>
            <li>Lijado de la madera y derivados</li>
            <li>Terminación de superficies</li>
            <li>
              Seguridad en el uso de las herramientas manuales y eléctricas
            </li>
            <li>
              Mecanizado de la madera con distintas herramientas eléctricas y
              manuales
            </li>
            <li>Uso de plantillas para mecanizar</li>
          </ol>
        </div>
        <div className="container-img-contenido">
          <img src="/img/img-carpinteria-curso.png" alt="imagen-logo" />
        </div>
      </div>
    </>
  );
};

export default ContenidosCurso;
