import React from "react";
import { Col } from "react-bootstrap";


import '../css/estilo.css';



export default function Video(props) {


  const url_imagen = `/Videos/${props.imagen}`;



  return (
    <Col >
      <a target="_blank" href={props.link} rel="noreferrer">
        <img
          className="rounded mx-auto d-block video"
          style={{ width: 600, height: 300 }}
          src={url_imagen}
          alt={props.nombre}
        />
      </a>
      <h5 className="py-2 text-center video_titulo">{props.nombre}</h5>
    </Col>
  );
}
