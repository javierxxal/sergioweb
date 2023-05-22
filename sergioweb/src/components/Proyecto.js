import React from "react";
import { Col } from "react-bootstrap";


import "../index.css";



export default function Proyecto(props) {


  return (
    <Col>
      <h5 className="herramienta_name">{props.nombre}</h5>
      <div>Enlace:</div>
      <div>{props.link}</div>
      <br></br>
      <div>{props.description}</div>
    </Col>
  );
}
