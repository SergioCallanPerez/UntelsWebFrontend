import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logoUntels.png'
import portal from '../assets/portalLogo.png'

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} width="250" height="50"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <NavDropdown title='Nosotros' id='navbarScrollingDropdown'>
                <NavDropdown title='Nuestra Universidad' id='navbarScrollingDropdown' drop='end'>
                    <NavDropdown.Item href="#Mision">Misión, visión y valores</NavDropdown.Item>
                    <NavDropdown.Item href='#Resena'>Reseña histórica</NavDropdown.Item>
                    <NavDropdown.Item href='#Estatuto'>Estatuto</NavDropdown.Item>
                    <NavDropdown.Item href='#Organigrama'>Organigrama</NavDropdown.Item>
                    <NavDropdown.Item href='#Directorio'>Directorio institucional</NavDropdown.Item>
                    <NavDropdown.Item href='#Campus'>Mapa del Campus</NavDropdown.Item>
                    <NavDropdown.Item href='#Convenios'>Convenios</NavDropdown.Item>
                    <NavDropdown.Item href='#Memoria'>Memoria Anual</NavDropdown.Item>
                    <NavDropdown.Item href='#Mesa'>Mesa de Parte</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Autoridades' id='navbarScrollingDropdown' drop='end'>
                    <NavDropdown.Item href="#Rectora">Rectora</NavDropdown.Item>
                    <NavDropdown.Item href='#Vicerrectora'>Vicerrectora académica</NavDropdown.Item>
                    <NavDropdown.Item href='#Vicerrector'>Vicerrector de investigación</NavDropdown.Item>
                    <NavDropdown.Item href='#Decano'>Decano</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Oficinas' id='navbarScrollingDropdown' drop='end'>
                    <NavDropdown.Item href="#Gestion">Gestión Académica y Prospectiva</NavDropdown.Item>
                    <NavDropdown.Item href='#Direccion'>Dirección de Responsabilidad Social Universitaria</NavDropdown.Item>
                    <NavDropdown.Item href='#Cooperación'>Cooperación y Relaciones internacionales</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Documentos de gestión' id='navbarScrollingDropdown' drop='end'>
                    <NavDropdown.Item href="#Reglamento">Reglamento Académico</NavDropdown.Item>
                    <NavDropdown.Item href='#TUPA'>TUPA</NavDropdown.Item>
                </NavDropdown>
            </NavDropdown>
            <NavDropdown title='Pregrado' id='navbarScrollingDropdown'>
                <NavDropdown title= 'Area 1' id='navbarScrollingDropdown' drop='end'>
                    <NavDropdown.Item href='#Carrera'>Carrera 1</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 2</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 3</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 4</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 5</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title= 'Area 2' id='navbarScrollingDropdown' drop='end'>
                    <NavDropdown.Item href='#Carrera'>Carrera 1</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 2</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 3</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 4</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 5</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title= 'Area 3' id='navbarScrollingDropdown' drop='end'>
                    <NavDropdown.Item href='#Carrera'>Carrera 1</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 2</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 3</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 4</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 5</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title= 'Area 4' id='navbarScrollingDropdown' drop='end'>
                    <NavDropdown.Item href='#Carrera'>Carrera 1</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 2</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 3</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 4</NavDropdown.Item>
                    <NavDropdown.Item href='#Carrera'>Carrera 5</NavDropdown.Item>
                </NavDropdown>
            </NavDropdown>
            <NavDropdown title= 'Posgrado' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#Admision'>Proceso de Admisión 2024-II</NavDropdown.Item>
                <NavDropdown.Item href='#Estructura'>Estructura Orgánica</NavDropdown.Item>
                <NavDropdown.Item href='#Presentacion'>Presentación</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title= 'Admision' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#Cronograma'>Cronograma</NavDropdown.Item>
                <NavDropdown.Item href='#Modalidades'>Modalidades</NavDropdown.Item>
                <NavDropdown.Item href='#Vacantes'>Vacantes</NavDropdown.Item>
                <NavDropdown.Item href='#Temario'>Temario</NavDropdown.Item>
                <NavDropdown.Item href='#Prospecto'>Prospecto</NavDropdown.Item>
                <NavDropdown.Item href='#Modelo'>Modelo de examen</NavDropdown.Item>
                <NavDropdown.Item href='#Informate'>Infórmate</NavDropdown.Item>
                <NavDropdown.Item href='#Preguntas'>Preguntas frecuentes</NavDropdown.Item>
                <NavDropdown.Item href='#Contactanos'>Contáctanos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link 
                href="http://transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=13444#.XwbQV21KjIV">
                <img src={portal} width="150" height="50"/>
            </Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="BUSCAR"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}