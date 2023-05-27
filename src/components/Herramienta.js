import React from "react";
import { Col } from "react-bootstrap";


import '../css/estilo.css';



export default function Herramienta(props) {


  const url_imagen = `/Logos/${props.imagen}`;



  return (
    <Col className="py-2">
      <img
        className="herramienta"
        style={{ width: 150, height: 150 }}
        src={url_imagen}
        alt={props.nombre}
      />
      <h5 className="herramienta text-center pt-4">{props.nombre}</h5>
    </Col>
  );
}
