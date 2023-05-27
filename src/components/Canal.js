import React from "react";
import { Col,Row } from "react-bootstrap";

import "../css/estilo.css";
import Video from "./Video";

export default function Canal(props) {

    const videos = props.videos.map((v)=>{
        return(
            <Video
            key={v.nombre}
            nombre={v.nombre}
            imagen={v.imagen}
            link={v.link}
            />
        )
    })   


    return (
        <>
        <a target="_blank" href={props.link} rel="noreferrer">
            <Row className="pt-3 pb-4">
                <Col xs={4}></Col>
                <Col >
                    <h2 class="m-3 text-center canal">
                    {props.canal}
                    </h2>
                </Col>
                <Col xs={1}>
                    <img
                        src={`/Logos/${props.logo}`}
                        className="inline-block rounded-full"
                        width="100px"
                        height="100px"
                        alt="F1"
                    />
                </Col>
                <Col xs={4}></Col>
            </Row>
        </a>
        <div className="text-center pb-5 texto_intro">{props.description}</div>

        <Row>
        {videos}
        </Row>
        </>
    );
}
