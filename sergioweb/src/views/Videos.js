import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";


import data_v from '../data/video.json'
import Video from "../components/Video";

export function Videos() {

  const videos = data_v.map((v) => {
    let contador = 2;
    let vid = v.videos.map((vi) => {
      if(contador>0){
        contador--;
        return(
          <Video
          key={vi.nombre}
          nombre={vi.nombre}
          imagen={vi.imagen}
          link={vi.link}
          descripcion={vi.descripcion}
          />
        )
      }else{
        contador = 2;
        return(
          <>
            <Row></Row>
            <Video
            key={vi.nombre}
            nombre={vi.nombre}
            imagen={vi.imagen}
            link={vi.link}
            descripcion={v.descripcion}
            />
          </>
        )
      }
    })
    
    return (
      <>
        <a target="_blank" href={v.link}>
          <h2 class="text-3xl p-5  font-bold text-center hover:text-blue-300 visited:text-purple-300">
            {v.canal}
            <img src={`/Logos/${v.logo}`} class="inline-block rounded-full" width="88px" height="88px" alt="F1"/>
          </h2>
        </a>
        <br></br>
        <div>{v.description}</div>
        <br></br>

        {vid}
      </>
    )
  })

  return (
    {videos}
    );
}
