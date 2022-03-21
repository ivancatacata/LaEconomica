import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./WpButton.css";

export default function Buttons() {
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    window.gtag("event", "conversion", {
      send_to: "AW-994610635/BQQeCPmW440DEMubotoD",
      event_callback: callback,
    });
    return false;
  }
  return (
    <div className="Buttons">
      <a
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          return gtag_report_conversion(
            "https://api.whatsapp.com/send?phone=5493516684151&amp;text=Hola, quisiera realizar una consulta."
          );
        }}
        href="https://api.whatsapp.com/send?phone=5493516684151&amp;text=Hola, quisiera realizar una consulta."
      >
        <span hidden>whatsapp</span>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a
        className="messenger-btn"
        onClick={() => {
          window.gtag_report_conversion("https://m.me/101000252397584");
        }}
        href="https://m.me/101000252397584"
        target="_blank"
        rel="noreferrer"
      >
        <span hidden>messenger</span>
        <FontAwesomeIcon icon={faFacebookMessenger} />
      </a>
    </div>
  );
}
