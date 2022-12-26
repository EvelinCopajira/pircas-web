import "./CursosCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


const CursosCard = () => {
  return (
    <>
      <div className="cards-cursos-container">
        <Card sx={{ maxWidth: 275 }} className={"card-curso"}>
          <CardMedia
            component="img"
            alt="img-carpinteria"
            height="140"
            image="/img/img-carpinteria.jpg"
          />
          <CardContent>
            <h3>Carpinteria de banco y madera maciza</h3>
            <br />
            <br />
            <p> Lun o mier 18:30 a 21:30hs</p>
            <p> Comienza en agosto 2023</p>
          </CardContent>
          <CardActions className="btn-curso">
            <Button size="small" className="btn"><Link to={"/carpinteria"}>VER CURSO</Link></Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 275 }} className={"card-curso"}>
          <CardMedia
            component="img"
            alt="img-carpinteria"
            height="140"
            image="/img/img-electricas.jpg"
          />
          <CardContent>
            <h3>Instalaciones eléctricas domiciliarias</h3>
            <br />
            <br />
            <p> Lun o Jue 18:30 a 21:30hs</p>
            <p> Comienza en agosto 2023</p>
          </CardContent>
          <CardActions className="btn-curso">
            <Button size="small" className="btn"><Link to={"/instalaciones-electricas"}>VER CURSO</Link></Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 275 }} className={"card-curso"}>
          <CardMedia
            component="img"
            alt="img-carpinteria"
            height="140"
            image="/img/img-construccion-seco.jpg"
          />
          <CardContent>
            <h3>Steel framing - Construcción en seco</h3>
            <br />
            <br />
            <p> A definir</p>
            <p> PROXIMAMENTE</p>
          </CardContent>
          <CardActions className="btn-curso">
            <Button size="small" className="btn"><Link to={"/steel-framing"}>VER CURSO</Link></Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 275 }} className={"card-curso"}>
          <CardMedia
            component="img"
            alt="img-soldadura-herreria"
            height="140"
            image="/img/img-soldadura-herreria.jpg"
          />
          <CardContent>
            <h3>Soldadura y herrería</h3>
            <br />
            <br />
            <p> Miércoles 19 a 22hs</p>
            <p>Comienza en agosto 2023</p>
          </CardContent>
          <CardActions className="btn-curso">
            <Button size="small" className="btn"><Link to={"/soldadura-y-herreria"}>VER CURSO</Link></Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 275 }} className={"card-curso"}>
          <CardMedia
            component="img"
            alt="img-albanileria"
            height="140"
            image="/img/img-albanileria.jpg"
          />
          <CardContent>
            <h3>Auxiliar de construcción (albañilería)</h3>
            <br />
            <br />
            <p> A definir</p>
            <p> PROXIMAMENTE</p>
          </CardContent>
          <CardActions className="btn-curso">
            <Button size="small" className="btn"><Link to={"/albanileria"}>VER CURSO</Link></Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 275 }} className={"card-curso"}>
          <CardMedia
            component="img"
            alt="img-plomeria"
            height="140"
            image="/img/img-plomeria.png"
          />
          <CardContent>
            <h3>Auxiliar de plomería</h3>
            <br />
            <br />
            <p> A definir</p>
            <p> PROXIMAMENTE</p>
          </CardContent>
          <CardActions className="btn-curso">
            <Button size="small" className="btn"><Link to={"/plomeria"}>VER CURSO</Link></Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default CursosCard;
