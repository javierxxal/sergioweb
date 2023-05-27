import React from "react";
import { Row,Col } from "react-bootstrap";


import '../css/estilo.css';



export default function Proyecto(props) {

  const url_imagen = `/Proyecto/${props.imagen}`;


  return (
    <Row className="mt-3 mb-4 text-center">
      <Col xl={2}></Col>
      <Col>
      <a target="_blank" href={props.link} rel="noreferrer">
      <h4 className="video_titulo">{props.nombre}</h4>
      </a>
      <a target="_blank" href={props.link} rel="noreferrer">
      <img
        style={{ width: 450, height: 550 }}
        src={url_imagen}
        alt={props.nombre}
        className="video"
      />
      </a>
      <Row>
      <div className="texto_exp">{props.description}</div>
      </Row>
      </Col>
      <Col xl={2}></Col>
    </Row>
  );
}
