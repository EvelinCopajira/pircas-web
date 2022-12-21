import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div className="container-portada">
        <div className="container-img-inicio">
          <img src="/img/pircas-logo.png" alt="imagen-portada"></img>
        </div>
        <div className="container-texto">
          <p>
            <strong>PIRCA</strong> se conoce porpularmente como aquella técnica
            que señaliza un camino y se construye de manera artesanal.
          </p>
          <p>
            Las pircas que encontramos en los caminos, han sido creadas por los
            viajeros a partir de la colocación equilibrada en altura de
            diferentes piedras, con la intención de marcar el sendero, no sólo
            para ellos mismos, sino también para los que vendrán.
          </p>
          <p>
            En este sentido, nuestra fundación adopta este significado con la
            intención de marcar nuevas sendas que sean construidas
            comunitariamente, dejando una huella en la vida de las personas que
            transitan este espacio.
          </p>
        </div>
      </div>
      <div className="container-proposito">
        <div className="container-logo-proposito">
          <img src="/img/favicon.png" alt="imagen-portada"></img>
        </div>
        <p className="container-texto-proposito">
          <p>
            <strong>Fundación Pircas</strong> es una ONG que busca generar
            igualdad de oportunidades en el acceso a la educación de calidad,
            inclusión a un espacio social y comunitario y transformación y
            mejora del mundo en el que vivimos.
          </p>
          <br />
          <br />
          <br />
          <br />

          <p>
            <strong>Fundación Pircas</strong> impulsa una propuesta activa de
            inclusión y formación educativa capacitando y brindando herramientas
            concretas para el desempeño de un oficio, enmarcado en el Espacio
            Taller de Oficios: un entorno cooperativo de aprendizaje mutuo y de
            circulación de saberes.
          </p>
        </p>
        <div className="container-logo-proposito">
          <img src="/img/favicon.png" alt="imagen-portada"></img>
        </div>
      </div>
      <div className="container-impacto">
        <div className="container-img-cordoba">
          <img src="/img/cordoba-bordo.png" alt="imagen-cordoba"></img>
        </div>
        <div className="impacto-estudiantes">
          <h2>+ 500</h2>
          <p>
            <strong>estudiantes</strong>
          </p>
        </div>
        <div className="impacto-trabajo">
          <h2>+ 200</h2>
          <p>
            <strong>oportunidades de trabajo</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
