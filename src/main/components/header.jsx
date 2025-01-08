import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import logo from "@/assets/logoUntels.png";
import portal from "@/assets/portalLogo.png";
import "@/styles/header.css";

const portalURL =
  "http://transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=13444#.XwbQV21KjIV";


const menuData2 = [
  {
    title: "Nosotros",
    children: [
      {
        title: "Nuestra Universidad", href: "/nosotros"
      },
      {
        title: "Autoridades", href: "/autoridades" 
      },
      {
        title: "Oficinas",
        children: [
          { title: "Gestión Académica y Prospectiva", href: "#Gestion" },
          {
            title: "Dirección de Responsabilidad Social Universitaria",
            href: "#Direccion",
          },
          {
            title: "Cooperación y Relaciones internacionales",
            href: "#Cooperación",
          },
        ],
      },
      {
        title: "Documentos de gestión",
        children: [
          { title: "Reglamento Académico", href: "#Reglamento" },
          { title: "TUPA", href: "#TUPA" },
        ],
      },
    ],
  },
  {
    title: "Pregrado",
    children: [
      {
        title: "Facultad de Ciencias Administrativas y Financieras",
        /*TODO: Agregar el href a area*/
        children: [
          { title: "Administración de empresas", href: "/carreras/administracion" },
          { title: "Marketing y Negocios Internacionales", href: "/carreras/marketing" },
        ],
      },
      {
        title: "Facultad de Ingeniería Ambiental e Industrial",
        /*TODO: Agregar el href a area*/
        children: [
          { title: "Ingeniería Ambiental", href: "#Carrera1" },
          { title: "Ingeniería Industrial", href: "#Carrera2" },
        ],
      },
      {
        title: "Facultad de Ingeniería de Sistemas Computacionales",
        /*TODO: Agregar el href a area*/
        children: [
          { title: "Ingeniería de Sistemas de Información", href: "#Carrera1" },
          { title: "Ingeniería en Ciencia de Datos e Inteligencia Artificial", href: "#Carrera2" },
          { title: "Ingeniería de Software", href: "#Carrera3" },
        ],
      },
      {
        title: "Facultad de Ingeniería Mecánica y Electrónica",
        /*TODO: Agregar el href a area*/
        children: [
          { title: "Ingeniería Mecánica y Eléctrica", href: "#Carrera1" },
          { title: "Ingeniería Electrónica y Telecomunicaciones", href: "#Carrera2" },
          { title: "Ingeniería Mecatrónica", href: "#Carrera3" },
        ],
      },
    ],
  },
  {
    title: "Posgrado",
    children: [
      { title: "Proceso de Admisión 2024-II", href: "#Admision" },
      { title: "Estructura Orgánica", href: "#Estructura" },
      { title: "Presentación", href: "#Presentacion" },
    ],
  },
  {
    title: "Admision",
    children: [
      { title: "Cronograma", href: "#Cronograma" },
      { title: "Modalidades", href: "#Modalidades" },
      { title: "Vacantes", href: "#Vacantes" },
      { title: "Temario", href: "#Temario" },
      { title: "Prospecto", href: "#Prospecto" },
      { title: "Modelo de examen", href: "#Modelo" },
      { title: "Infórmate", href: "#Informate" },
      { title: "Preguntas frecuentes", href: "#Preguntas" },
      { title: "Contáctanos", href: "#Contactanos" },
    ],
  },
];

let lastScrollY = 0;

export default function Header() {
  const [showList, setShowList] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 76) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
    setCollapsed(true); // close navbar in mobile on scroll
    setShowList([]); // close all dropdowns on scroll
    lastScrollY = window.scrollY;
  };

  const handleClickOutside = (event) => {
    // close all dropdowns on click outside
    if (ref.current && !ref.current.contains(event.target)) {
      setShowList([]); // close all dropdowns on scroll
    }
  };

  const handleNavDropdownClick = (link) => {
    setShowList([]); // close all dropdowns on scroll
    navigate("/" + link);
  };

  const handleMouseEnter = (key, index) => {
    setShowList((prevList) => {
      const newList = [...prevList];
      newList[index] = key;
      return newList;
    });
  };

  const renderNavItem = (item, deep = 0) => {
    if (item.children) {
      return (
        <NavDropdown
          className={`background main-dropdown ${
            item.href ? "cursor=pointer" : "cursor-none"
          }`}
          key={item.title}
          title={deep === 0 ? <b>{item.title}</b> : item.title}
          id={`nav-drop-${deep}-${item.title}`}
          drop={deep === 0 ? undefined : "end"}
          show={isBrowser ? showList.includes(item.title) : undefined}
          onMouseEnter={
            isBrowser ? () => handleMouseEnter(item.title, deep) : undefined
          }
          onClick={
            isBrowser && item.href
              ? () => handleNavDropdownClick(item.href)
              : undefined
          }
        >
          {item.children.map((child) => renderNavItem(child, deep + 1))}
        </NavDropdown>
      );
    }
    return (
      <NavDropdown.Item as={Link} key={item.href} to={item.href}>
        {item.title}
      </NavDropdown.Item>
    );
  };

  return (
    <Navbar
      expand="lg"
      className={`background fixed-top ${headerVisible ? "" : "hidden"}`}
      onSelect={() => {
        setShowList([]); // close all dropdowns
        setCollapsed(true); // close navbar in mobile
      }}
      expanded={!collapsed}
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} height="50" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler-container"
          aria-controls="navbarScroll"
          onClick={() => setCollapsed(!collapsed)}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`m-auto my-2 my-lg-0 justify-content-between ${
              isMobile ? "" : "w-50 my-2 my-lg-0"
            }`}
            navbarScroll
            ref={ref}
          >
            {menuData2.map((item) => renderNavItem(item))}
          </Nav>
          <Nav.Link target="_blank" href={portalURL}>
            <img src={portal} height="50" alt="Portal" />
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