import React from "react";
import { Col, Row } from "react-bootstrap";


import '../css/estilo.css';
 


export default function Videogame(props) {


  const url_imagen = `/Videojuego/${props.imagen}`;



  return (
    <Row className="my-3 text-center">
      <Col xs={1}></Col>
      <Col xs={4}>
      <a target="_blank" href={props.link} rel="noreferrer">
      <img
        style={{ width: 250, height: 350 }}
        src={url_imagen}
        alt={props.nombre}
        className="video"
      />
      </a>
      </Col>
      <Col xs={7}>
      <a target="_blank" href={props.link} rel="noreferrer">
      <h4 className="py-3 video_titulo">{props.nombre}</h4>
      </a>

      <div className="texto_exp">{props.descripcion}</div>
      </Col>
      <Col xs={1}></Col>

    </Row>
  );
}
