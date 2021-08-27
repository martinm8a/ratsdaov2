import React from "react";
import {Link} from "react-router-dom";
import {Button} from "./Button";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Noticias y ofertas para las temporadas de invierno y verano en tu
          email
        </p>
        <p className="footer-subscription-text">Desuscribite cuando quieras</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribete</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Nosotros</h2>
            <Link to="/">Conocenos</Link>
            <Link to="/">Testimonios</Link>
            <Link to="/">Inversores</Link>
            <Link to="/">Legales</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contacto</h2>
            <Link to="/contact">Contactanos</Link>
            <Link to="/">Atención al Cliente</Link>
            <Link to="/">Destinos</Link>
            <Link to="/">Sponsors</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Nuestros Videos</Link>
            <Link to="/">Embajadores</Link>
            <Link to="/">Agencia</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Redes</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              FINDEL
              <i class="fas fa-globe-americas" />
            </Link>
          </div>
          <small class="website-rights">FINDEL © 2020 by 8a</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
