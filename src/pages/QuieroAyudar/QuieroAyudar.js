import "./QuieroAyudar.css";

const QuieroAyudar = () => {
  return (
    <>
      <div className="ayuda-container">
        <h1>QUIERO AYUDAR</h1>
        <h2>¡Necesitamos de tu ayuda para seguir transformando realidades!</h2>
        <div className="ayuda">
          <div className="dona">
            <div className="container-img-dona">
              <img src="/img/img-dona.png" alt="imagen-dona"></img>
            </div>
            <h2>DONÁ</h2>
            <p>
              Para poder seguir con nuestra misión en la fundación, necesitamos
              de tu ayuda. Podés elegir donar haciéndote socio todos los meses o
              por única vez.
            </p>
          </div>
          <div className="apadrina">
            <div className="container-img-apadrina">
              <img src="/img/img-apadrina.png" alt="imagen-apadrina"></img>
            </div>
            <h2>APADRINÁ</h2>
            <p>
              Queremos construir una comunidad donde todos tengan un rol
              protagónico desde sus potencialidades.
              <br />
              <br />
              Con este programa conseguimos que por cada persona que paga un
              curso hace posible que otra con menos recursos económicos pueda
              hacerlo.
              <br />
              <br />
              ¡Te invitamos a ser parte de estas historias!
            </p>
          </div>
          <div className="voluntario">
            <div className="container-img-voluntario">
              <img src="/img/img-voluntario.png" alt="imagen-voluntario"></img>
            </div>
            <h2>SÉ VOLUNTARIO</h2>
            <p>
              A PIRCAS llegan voluntarios con los corazones abiertos listos para
              ayudar y aportar en la misión de la fundación desde distintos
              puntos de Argentina y el mundo.¡Sumate a esta experiencia única!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuieroAyudar;
