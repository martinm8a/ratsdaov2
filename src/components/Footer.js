import React from "react";
import {Link} from "react-router-dom";
import {Button} from "./Button";
import "./Footer.css";
import "./Navbar.css";

function Footer() {
  return (
    <div className="footer-container">
      
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>The Dao</h2>
            <Link to="/">The team</Link>
            <Link to="/">Investors</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact</h2>
            <Link to="/contact">Contact us</Link>
            <Link to="/">Sponsors</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Our Videos</Link>
            <Link to="/">Ambassadors</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social</h2>
            <Link to="/">Discord</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src={"images/rat.png"} className="menu-icon2" alt="rat icon"/>
            </Link>
          </div>
          <small class="website-rights">Rats Dao © 2022 by 8a</small>
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
            <a
              class="social-icon-link discord"
              href="https://discord.com/invite/jwKsgPep"
              target="_blank"
              aria-label="Discord"
            >
              <i class="fab fa-discord" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://twitter.com/RatsDao"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
