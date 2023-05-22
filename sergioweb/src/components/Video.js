import React from "react";
import { Col } from "react-bootstrap";


import "../index.css";



export default function Video(props) {


  const url_imagen = `/Videos/${props.imagen}`;



  return (
    <Col>
      <a target="_blank" href={props.link}>
        <img
          className="imagen"
          style={{ width: 250, height: 300 }}
          src={url_imagen}
          alt={props.nombre}
        />
      </a>
      <h5 className="imagen">{props.nombre}</h5>
    </Col>
  );
}
