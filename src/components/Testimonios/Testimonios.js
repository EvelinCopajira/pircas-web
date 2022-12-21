import "./Testimonios.css";

const Testimonios = () => {
  return (
    <>
      <div className="container-testimonios">
        <div className="testimonio1">
          <p>
            Disfruto mucho realizando este trabajo. Me gusta enseñar y
            transferir mis conocimientos.
          </p>
          <br />
          <br />
          <br />

          <p className="nombre-testimonio">MÓNICA BAGGINI</p>
          <p className="cargo">Profesora del Taller de Auxiliar de Plomería</p>
        </div>

        <div className="testimonio2">
          <p>
            Los invito a que se suban a este viaje increíble de aprender y
            llevar adelante la construcción en seco.
          </p>
          <br />
          <br />
          <br />
          <p className="nombre-testimonio">ALEJANDRO ROLIH</p>
          <p className="cargo">Profesor del Taller de Steel Framing - Construcción en seco</p>
        </div>
        <div className="testimonio3">
          <p>
            Me encanta transmitir todos mis conocimientos y experiencias para
            poder formar a la gente en el oficio.
          </p>
          <br />
          <br />
          <br />
          <p className="nombre-testimonio">ARIEL LÓPEZ</p>
          <p className="cargo">Profesor del Curso de Soldadura y Herrería</p>
        </div>
      </div>
    </>
  );
};

export default Testimonios;
