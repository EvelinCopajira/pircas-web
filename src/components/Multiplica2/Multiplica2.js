import "./Multiplica2.css";

const Multiplica = () => {
  return (
    <>
      <div className="multiplica-container">
        <div className="multiplica">
          <h2>Programa MultiplicaDOS</h2>
          <p>
            Por cada persona que paga un curso permite otorgarle una beca a otro
            estudiante de bajos recursos permitiendo una sociedad en donde todos
            puedan acceder a la educación.
          </p>
        </div>
        <div className="hacemos">
          <h2>¿CÓMO LO HACEMOS?</h2>
          <div className="hacemos-lista">
            <p>Trabajamos en un mapeo territorial de zonas carenciadas</p>
            <p>
              Generamos alianzas estratégicas con las organizaciones locales y
              nacionales que están trabajando en el territorio.
            </p>
            <p>
              Analizamos los perfiles y distribuimos las becas entre los
              interesados
            </p>
            <p>Hacemos reportes de gestión</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Multiplica;
