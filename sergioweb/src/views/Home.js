
import { Col, Row} from "react-bootstrap"

import '../css/estilo.css';


export function Home() {


    return (
        <Row className="text-center">
            <Col xs={1}></Col>
            <Col xs={10}>
            <div class="aventura pb-2">Sergio Sanchis Cagigal</div>
            <h3 class="underline pb-3">Game Designer y Game producer</h3>

            <div class='flex items-center justify-center py-7'>
                <img 
                    src="/sergio.jpg"
                    alt="Sergio"
                    style={{ width: 600, height: 600 }}
                />
            </div>

            <div class="text-centered texto_intro">
                <br />
                Mi nombre es Sergio Sanchis Cagigal y soy graduado en comunicación audiovisual. Tengo conocimientos de edición de vídeo, audio y redes sociales.
                Pero he orientado mi carrera profesional al mundo de los videojuegos, como Diseñador de juego y como productor.
                Conozco el mundo de los videojuegos tanto la industria como del desarrollo.
                Se como crear documentos de diseño, metodologías ágiles, desarrollo en cascada, como hacer sesiones de playtest etc.
                <br /><br />
                Habituado a trabajar en equipo soy una persona comunicativa que escucha a los demás e intenta poner todas las ideas sobre la mesa. Siempre busco dar lo mejor de mí mismo en cada trabajo teniendo en cuenta en todo momento el tiempo del que se dispone y los recursos.
                <br /><br />
                Cada vez que tengo oportunidad, sigo formándome en portales online como pueden ser Domestika, Hoy grabo o Udemy entre otros.
                Para continuar aprendiendo tanto herramientas nuevas como formas de trabajo, formatos de contenido etc.
                Al igual que en el inglés, donde he cursado el nivel C1 en la escuela oficial de idiomas de Alcalá de Henares.
                <br /><br />
                Me encantan las radio ficción, podcast y audio relatos que compagino con mis otros hobbies que son la lectura, los videojuegos, el rol y los juegos de mesa.

            </div>

            </Col>
            <Col xs={1}></Col>
        </Row>
    );
}
