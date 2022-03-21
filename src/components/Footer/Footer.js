import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img src="/images/logo-only.png" alt="logo footer" />
        <div className="logoyredes">
          <h1>CONTACTANOS</h1>
          <a target="_blank" href="tel:08008880168" rel="noreferrer">
            <FontAwesomeIcon icon={faPhoneAlt} className="marginright" />
            0800-888-0168
          </a>

          <a
            className="display"
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5493516684151&text=Hola,%20quisiera%20realizar%20una%20consulta."
          >
            <FontAwesomeIcon icon={faWhatsapp} className="marginright" />
            +54 9 3516 684151
          </a>
        </div>

        {/* <h1>REDES</h1> */}
        <div className="Redes">
          {/* <h1>NUESTRAS REDES</h1> */}
          <div className="redesfooter">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Viviendas-La-Econ%C3%B3mica-101000252397584"
            >
              <div className="">
                <span hidden>facebook</span>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/viviendas.laeconomica/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="">
                <span hidden>instagram</span>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </a>
            <a
              href="https://www.youtube.com/channel/UCdL9npkfcNbX8tQ7zoUs2iQ"
              target="_blank"
              rel="noreferrer"
            >
              <div className="">
                <span hidden>youtube</span>
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </a>
          </div>
        </div>
      </footer>
      <p className="derechos">
        Todos los derechos reservados - Viviendas La Ecónomica 2022
      </p>
    </>
  );
};

export default Footer;
