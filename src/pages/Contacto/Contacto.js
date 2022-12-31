import "./Contacto.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contacto = () => {
  return (
    <>
      <div className="contacto-container">
        <h1>CONTACTANOS</h1>
        <div className="contacto">
          <div className="datos">
            <p>Contacto@fundacionpircas.org</p>
            <p>Teléfono: +54 3518 746573</p>
            <p>Salta 485, Córdoba Capital, Argentina</p>
            <div className="formulario">
              <p>¿En qué te podemos ayudar?</p>
            </div>
          </div>
          <div className="contacto-seguinos">
            <div className="mapa-pircas">
              <h2>DÓNDE ESTAMOS</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0731071986106!2d-64.17910012355618!3d-31.412111796046204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3d8204e0307%3A0xa20b1e7350cb1f7a!2sFundaci%C3%B3n%20Pircas!5e0!3m2!1ses-419!2sar!4v1671677142319!5m2!1ses-419!2sar"
                className="mapa"
                title="mapa"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="container-redes">
              <h2>SEGUINOS</h2>
              <div class="redes">
                <div className="facebook">
                  <a
                    href="https://www.facebook.com/search/top?q=fundaci%C3%B3n%20pircas"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <FacebookIcon className="redes"/>
                  </a>
                </div>
                <div className="instagram">
                  <a
                    href="https://www.instagram.com/fundacionpircas/"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <InstagramIcon className="redes"/>
                  </a>
                </div>
                <div className="linkedin">
                  <a
                    href="https://www.linkedin.com/company/fundacionpircas/"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <LinkedInIcon className="redes"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
