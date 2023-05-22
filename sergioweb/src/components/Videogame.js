import React from "react";
import { Col, Row } from "react-bootstrap";


import "../index.css";



export default function Videogame(props) {


  const url_imagen = `/Imagenes/${props.imagen}`;



  return (
    <Row>
      <Col>
      <a target="_blank" href={props.link}>
      <img
        className="herramienta"
        style={{ width: 250, height: 300 }}
        src={url_imagen}
        alt={props.nombre}
      />
      </a>
      </Col>
      <Col>
      <h5 className="herramienta_name">{props.nombre}</h5>
      <div>{props.descripcion}</div>
      </Col>
    </Row>
  );
}
