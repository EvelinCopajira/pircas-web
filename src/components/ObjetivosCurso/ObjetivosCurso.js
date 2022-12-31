import "./ObjetivosCurso.css";

const ObjetivosCurso = () => {
  return (
    <>
      <div className="objetivos-container">
        <h3>OBJETIVOS</h3>
        <div className="objetivos">
          <p>
            Aprender sobre aquellas nociones claves que se deben dominar a la
            hora de realizar cualquier trabajo de carpintería.
          </p>
          <p>
            Conocer la importancia del espacio de trabajo y obtener las
            herramientas necesarias para desenvolverse con autonomía
          </p>
        </div>
      </div>
      <div className="docente">
        <img src="img/img-doc-carpinteria.png" alt="foto-docente"></img>
      </div>
      <div className="programa-multiplica">
        <h3>Programa MultiplicaDOS</h3>
        <p>
          Recordá que TU INSCRIPCIÓN VALE POR DOS, haciendo que una persona con
          menos recursos económicos pueda acceder al curso. Los beneficiaros de
          las becas, son seleccionados por Pircas, a través de alianzas con
          organizaciones que traban en barrios en situación de vulnerabilidad
        </p>
      </div>
    </>
  );
};

export default ObjetivosCurso;
