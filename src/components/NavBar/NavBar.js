import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <AppBar className="header-primary">
        <Toolbar className="navbar-container">
          <div className="container-logo">
            <Link to={"/"}>
              <img src="/img/logo-pircas.png" alt="imagen-logo" />
            </Link>
          </div>
          <ul className="navbar">
            <li>
              <Button
                disableRipple
                style={{ backgroundColor: "transparent" }}
                variant="text"
                className="navbar-btn"
              >
                <Link to={"/"}>INICIO</Link>
              </Button>
            </li>
            <li>
              <Button
                disableRipple
                style={{ backgroundColor: "transparent" }}
                variant="text"
                className="navbar-btn"
              >
                <Link to={"/nuestrasactividades"}>NUESTRAS ACTIVIDADES</Link>
              </Button>
            </li>
            <li>
              <Button
                disableRipple
                style={{ backgroundColor: "transparent" }}
                variant="text"
                className="navbar-btn"
              ><Link to={"/quienessomos"}>QUIENES SOMOS</Link>
                
              </Button>
            </li>
            <li>
              <Button
                disableRipple
                style={{ backgroundColor: "transparent" }}
                variant="text"
                className="navbar-btn"
              >
                <Link to={"/quieroayudar"}>QUIERO AYUDAR</Link>
              </Button>
            </li>
            <li>
              <Button
                disableRipple
                style={{ backgroundColor: "transparent" }}
                variant="text"
                className="navbar-btn"
              >
                <Link to={"/contacto"}>CONTACTO</Link>
              </Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
