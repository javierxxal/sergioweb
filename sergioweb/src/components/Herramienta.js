import React from "react";
import { Col } from "react-bootstrap";


import "../index.css";



export default function Herramienta(props) {


  const url_imagen = `/Logos/${props.imagen}`;



  return (
    <Col>
      <img
        className="herramienta"
        style={{ width: 150, height: 200 }}
        src={url_imagen}
        alt={props.nombre}
      />
      <h5 className="herramienta_name">{props.nombre}</h5>
    </Col>
  );
}
