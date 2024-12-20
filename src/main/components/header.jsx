import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logoUntels.png';
import portal from '../assets/portalLogo.png';
import "../styles/header.css"
import { isBrowser, isMobile } from 'react-device-detect';

const menuData = {
    Nosotros: {
        'Nuestra Universidad': [
            { title: 'Misión, visión y valores', href: '#Mision' },
            { title: 'Reseña histórica', href: '#Resena' },
            { title: 'Estatuto', href: '#Estatuto' },
            { title: 'Organigrama', href: '#Organigrama' },
            { title: 'Directorio institucional', href: '#Directorio' },
            { title: 'Mapa del Campus', href: '#Campus' },
            { title: 'Convenios', href: '#Convenios' },
            { title: 'Memoria Anual', href: '#Memoria' },
            { title: 'Mesa de Parte', href: '#Mesa' },
        ],
        Autoridades: [
            { title: 'Rectora', href: '#Rectora' },
            { title: 'Vicerrectora académica', href: '#Vicerrectora' },
            { title: 'Vicerrector de investigación', href: '#Vicerrector' },
            { title: 'Decano', href: '#Decano' },
        ],
        Oficinas: [
            { title: 'Gestión Académica y Prospectiva', href: '#Gestion' },
            { title: 'Dirección de Responsabilidad Social Universitaria', href: '#Direccion' },
            { title: 'Cooperación y Relaciones internacionales', href: '#Cooperación' },
        ],
        'Documentos de gestión': [
            { title: 'Reglamento Académico', href: '#Reglamento' },
            { title: 'TUPA', href: '#TUPA' },
        ],
    },
    Pregrado: {
        'Area 1': [
            { title: 'Carrera 1', href: '#Carrera1' },
            { title: 'Carrera 2', href: '#Carrera2' },
            { title: 'Carrera 3', href: '#Carrera3' },
            { title: 'Carrera 4', href: '#Carrera4' },
            { title: 'Carrera 5', href: '#Carrera5' },
        ],
        'Area 2': [
            { title: 'Carrera 1', href: '#Carrera1' },
            { title: 'Carrera 2', href: '#Carrera2' },
            { title: 'Carrera 3', href: '#Carrera3' },
            { title: 'Carrera 4', href: '#Carrera4' },
            { title: 'Carrera 5', href: '#Carrera5' },
        ],
    },
    Posgrado: [
        { title: 'Proceso de Admisión 2024-II', href: '#Admision' },
        { title: 'Estructura Orgánica', href: '#Estructura' },
        { title: 'Presentación', href: '#Presentacion' },
    ],
    Admision: [
        { title: 'Cronograma', href: '#Cronograma' },
        { title: 'Modalidades', href: '#Modalidades' },
        { title: 'Vacantes', href: '#Vacantes' },
        { title: 'Temario', href: '#Temario' },
        { title: 'Prospecto', href: '#Prospecto' },
        { title: 'Modelo de examen', href: '#Modelo' },
        { title: 'Infórmate', href: '#Informate' },
        { title: 'Preguntas frecuentes', href: '#Preguntas' },
        { title: 'Contáctanos', href: '#Contactanos' },
    ],
};

const renderMenuItems = (items) =>
    items.map((item) => (
        <NavDropdown.Item key={item.href} href={item.href}>
            {item.title}
        </NavDropdown.Item>
    ));

    export default function Header() {
        const [activeMenu, setActiveMenu] = useState(null);
        const [activeSubmenu, setActiveSubmenu] = useState(null);
    
        const handleMouseEnter = (key, type) => {
            if (type === 'menu') {
                if (isBrowser) setActiveMenu(key);
            } else if (type === 'submenu') {
                if (isBrowser) setActiveSubmenu(key);
            }
        };
    
        const handleMouseLeave = (type) => {
            if (type === 'menu') {
                if (isBrowser) setActiveMenu(null);
            } else if (type === 'submenu') {
                if (isBrowser) setActiveSubmenu(null);
            }
        };
    
        return (
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logo} width="250" height="50" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" aria-expanded={!!activeMenu} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            {Object.entries(menuData).map(([key, value]) => (
                                <NavDropdown
                                    className='main-dropdown'
                                    key={key}
                                    title={key}
                                    id={`navbarScrollingDropdown-${key}`}
                                    show={isBrowser ? activeMenu === key : undefined}
                                    onMouseEnter={() => handleMouseEnter(key, 'menu')}
                                    onMouseLeave={() => handleMouseLeave('menu')}
                                    onClick={isMobile ? () => setActiveMenu(key) : undefined}
                                >
                                    {Array.isArray(value)
                                        ? renderMenuItems(value)
                                        : Object.entries(value).map(([subKey, subItems]) => (
                                              <NavDropdown
                                                  key={subKey}
                                                  title={subKey}
                                                  drop="end"
                                                  show={isBrowser ? activeSubmenu === subKey : undefined}
                                                  onMouseEnter={() => handleMouseEnter(subKey, 'submenu')}
                                                  onMouseLeave={() => handleMouseLeave('submenu')}
                                                  onClick={isMobile ? () => setActiveSubmenu(subKey) : undefined}
                                              >
                                                  {renderMenuItems(subItems)}
                                              </NavDropdown>
                                          ))}
                                </NavDropdown>
                            ))}
                        </Nav>
                        <Nav.Link
                            href="http://transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=13444#.XwbQV21KjIV"
                        >
                            <img src={portal} width="150" height="50" alt="Portal" />
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