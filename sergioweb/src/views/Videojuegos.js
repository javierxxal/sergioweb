import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";


import data_v from '../data/videogame.json'
import Videogame from "../components/Videogame";

export function Videojuegos() {

  const videogames = data_v.map((v)=>{
      return(
        <Videogame 
        key={v.nombre}
        nombre={v.nombre}
        imagen={v.imagen}
        link={v.link}
        descripcion={v.descripcion}
        />
      )
  })

  return (
    <>
      <br />
      <br />
      <h2 class="text-2xl px-5  pb-2 font-bold text-left hover:animate-bounce ">Videojuegos </h2>
      <div class="px-12 text-lg">
        {videogames}
      </div>
    </>
  );
}
