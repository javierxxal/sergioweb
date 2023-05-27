import {
  Row,
  Col,
} from "react-bootstrap";


import data_v from '../data/videogame.json'
import Videogame from "../components/Videogame";
import '../css/estilo.css';

export function Videojuegos() {

  const videogames = data_v.map((v)=>{
      return(
        <Row>
        <Videogame 
        key={v.nombre}
        nombre={v.nombre}
        imagen={v.imagen}
        link={v.link}
        descripcion={v.descripcion}
        />
        </Row>
      )
  })

  return (
    <Row>
      <Col xs={1}></Col>
      <Col xs={10}>
        {videogames}
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}
