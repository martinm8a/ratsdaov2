import React, {useState, useEffect} from "react";
import {Button} from "./Button";
import {Link} from "react-router-dom";
import "./Navbar.css";
import NuriLogo  from "./iconos/Nuri";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo hover" onClick={closeMobileMenu}>
          <NuriLogo />
            {/* <i className="menu-icon" src={Logo[0]} /> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sobre mi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tecnica"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                La técnica
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/media"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Media
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Obras</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
