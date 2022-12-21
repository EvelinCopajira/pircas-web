import "./Contacto.css";

const Contacto = () => {
  return (
    <>
      <div className="contacto-container">
      <h1>CONTACTO</h1>
      <div className="contacto">

        <div className="datos">
          <p>Contacto@fundacionpircas.org</p>
          <p>Teléfono: +54 3518 746573</p>
          <p>Salta 485, Córdoba Capital, Argentina</p>
          <div className="formulario">
            <p>¿En qué te podemos ayudar?</p>
          </div>
        </div>
        <div>
          <div className="mapa"></div>
          <div className="redes">
            <h2>SEGUINOS</h2>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contacto;
