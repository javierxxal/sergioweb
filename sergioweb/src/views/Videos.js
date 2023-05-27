import {

  Row,
} from "react-bootstrap";


import data_v from '../data/video.json'
import Canal from "../components/Canal";


export function Videos() {

  const videos = data_v.map((v) => {
    return(
      <Canal
        key={v.nombre}
        canal={v.canal}
        logo={v.logo}
        link={v.link}
        description={v.description}
        videos={v.videos}
      />
    )    
    })
    
    return (
      <Row>
      {videos}
      </Row>
    )
}
