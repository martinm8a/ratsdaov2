import React, {useState, useEffect} from "react";
import {Button} from "./Button";
import {Link} from "react-router-dom";
import "./Navbar.css";
import {useTranslation} from "react-i18next"

function Navbar() {

  const [t, i18n] = useTranslation("global");

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
    showButton()
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div>
          <Link to="/"  onClick={handleClick} >
          <img src={"images/rat.png"} className="menu-icon2" alt="rat icon"/>
          {/* <NuriLogo className="navbar-logo : hover " onClick={handleClick} /> */}
            {/* <i className="menu-icon" src={Logo[0]} /> */}
          </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/paper"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("menu.white-paper")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/acordion"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("menu.faqs")}
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                to="/media"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {t("menu.interview")}
              </Link>
            </li> */}
            {/* <li className="nav-item">
            <Link
              class="social-icon-link discord"
              onClick={closeMobileMenu}
              to="/"
              target="_blank"
              aria-label="discord"
            >
              <i class="fab fa-discord" />
            </Link>
            </li> */}
            {/* <li className="nav-item">
            <Link
              class="social-icon-link twitter"
              onClick={closeMobileMenu}
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            </li> */}
          </ul>
          {button && <Button buttonStyle="btn--outline" onClick={()=> i18n.changeLanguage("es")}>ES</Button>}
          {button && <Button buttonStyle="btn--outline" onClick={()=> i18n.changeLanguage("en")}>EN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
