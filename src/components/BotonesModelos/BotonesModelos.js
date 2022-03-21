import React from "react";
import { Link } from "react-router-dom";
import "./BotonesModelos.css";

const BotonesModelos = ({ modelo }) => {
  return (
    <>
      <div className="btn-group">
        <Link className="btn-card-green" to={`/modelo/${modelo}`}>
          Ver más
        </Link>
        {/* <Link className="btn-card-red" to="/Contacto">
          CONTACTATE
        </Link> */}
      </div>

      {/* <Link className="btn-card-comparar" to={`/comparar/${modelo}`}>
        <FontAwesomeIcon icon={faExchangeAlt} /> Comparar
      </Link> */}
    </>
  );
};

export default BotonesModelos;
