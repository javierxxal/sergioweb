import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Row} from "react-bootstrap"

import { NavBar2 } from './components/Navbar2';
import { Home } from './views/Home';
import { Info } from './views/Info';
import { Audio } from './views/Audio';
import { Proyectos } from './views/Proyectos';
import { Videojuegos } from './views/Videojuegos';
import { Videos } from './views/Videos';


import './css/estilo.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log("Sitio Web creado por Javier Alonso Lledó (https://github.com/javierxxal) akka: Jabubu")


root.render(
  <>
    <BrowserRouter>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <NavBar2></NavBar2>
          <div className='recuadro p-3'>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/info" exact element={<Info />} />
            <Route path="/audio" exact element={<Audio />} />
            <Route path="/videos" exact element={<Videos />} />
            <Route path="/videojuegos" exact element={<Videojuegos />} />
            <Route path="/proyectos" exact element={<Proyectos />} />
          </Routes>
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>

    </BrowserRouter>
  </>
);
