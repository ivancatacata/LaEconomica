import React, { useState, useEffect } from "react";
import "./CardModelo.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { formatNumber } from "../../helpers/formatNumber";
import BotonesModelos from "../BotonesModelos/BotonesModelos";

const CardModelo = ({
  modelo,
  cuotas,
  precio,
  precioCuota,
  entrega,
  dormitorios,
  banos,
  metros_totales,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        className="cardModelo"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <div>
          <div className="cardImagen">
            <img
              loading="lazy"
              src={`/images/modelos/${modelo}/${modelo}-1.jpg `}
              alt="viviendas la economica"
              className="imagen"
            />
            <span className="modeloCard">MODELO {modelo}</span>
          </div>
          <div className="precioContainer">
            <span className="precioCard">
              <b>$ {formatNumber(entrega)} </b>
            </span>
            + MÍNIMAS CUOTAS
          </div>
          <div className="cardText">
            <hr />
          </div>

          <div className="cardDescription">
            <div className="cardDescription__item">
              <img src="/images/icons/bed.png" alt="dormitorios" />
              <p>Dormitorios: {dormitorios}</p>
            </div>
            <div className="cardDescription__item">
              <img src="/images/icons/bano.png" alt="baños" />
              <p>Baños: {banos}</p>
            </div>
            <div className="cardDescription__item">
              <img src="/images/icons/house.png" alt="metros" />
              <p>M²: {metros_totales}</p>
            </div>
          </div>
        </div>

        <BotonesModelos modelo={modelo} />
      </div>
    </>
  );
};

export default CardModelo;
