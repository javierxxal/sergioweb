import {
    Navbar,
    Container,
    Nav,
    Form,
    Button,
    Row,
    Col,
  } from "react-bootstrap";
  

  
  import data_p from '../data/projecto.json'
  import Proyecto from "../components/Proyecto";

  export function Proyectos() {  

    const projectos = data_p.map((p)=>{
      return(
        <Proyecto 
        key={p.nombre}
        nombre={p.nombre}
        link={p.link}
        descripcion={p.descripcion}
        />
      )
    })

    return (
      <>
        <br />
        <br />
        <h2 class="text-2xl px-5  pb-2 font-bold text-left hover:animate-bounce ">Otros proyectos </h2>
        <div class="px-12 text-lg">
          {projectos}
        </div>
      </>
    );
  }