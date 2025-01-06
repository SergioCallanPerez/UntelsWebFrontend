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
import { useMediaQuery } from "react-responsive";

const portalURL =
  "http://transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=13444#.XwbQV21KjIV";

const menuData2 = [
  {
    title: "Nosotros",
    children: [
      {
        title: "Autoridades",
        href: "/autoridades",
      },
      {
        title: "Nuestra Universidad",
        children: [
          { title: "Misión, visión y valores", href: "/mision" },
          { title: "Reseña histórica", href: "/resena" },
          { title: "Estatuto", href: "/estatuto" },
          { title: "Organigrama", href: "/organigrama" },
          {
            title: "Directorio institucional",
            href: "/directorio_institucional",
          },
          { title: "Mapa del Campus", href: "/campus" },
          { title: "Convenios", href: "#Convenios" },
          { title: "Memoria Anual", href: "#Memoria" },
          { title: "Mesa de Parte", href: "#Mesa" },
        ],
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
        title: "Area 1",
        /*TODO: Agregar el href a area*/
        children: [
          { title: "Administración", href: "/carreras/administracion" },
          { title: "Carrera 2", href: "#Carrera2" },
          { title: "Carrera 3", href: "#Carrera3" },
          { title: "Carrera 4", href: "#Carrera4" },
          { title: "Carrera 5", href: "#Carrera5" },
        ],
      },
      {
        title: "Area 2",
        /*TODO: Agregar el href a area*/
        children: [
          { title: "Carrera 1", href: "#Carrera1" },
          { title: "Carrera 2", href: "#Carrera2" },
          { title: "Carrera 3", href: "#Carrera3" },
          { title: "Carrera 4", href: "#Carrera4" },
          { title: "Carrera 5", href: "#Carrera5" },
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

  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  const handleMouseLeave = (index) => {
    setShowList((prevList) => {
      const newList = prevList.slice(0, index);
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
          title={item.title}
          id={`nav-drop-${deep}-${item.title}`}
          drop={deep === 0 || isMd ? undefined : "start"}
          show={isBrowser ? showList.includes(item.title) : undefined}
          align={isMd ? undefined : "end"}
          onMouseEnter={
            isBrowser ? () => handleMouseEnter(item.title, deep) : undefined
          }
          onMouseLeave={isBrowser ? () => handleMouseLeave(deep) : undefined}
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
      <NavDropdown.Item
        as={Link}
        key={item.href}
        to={item.href}
        onClick={() => {
          setShowList([]); // close all dropdowns
          setCollapsed(true); // close navbar in mobile
        }}
      >
        {item.title}
      </NavDropdown.Item>
    );
  };

  return (
    <Navbar
      expand="lg"
      className={`background fixed-top ${headerVisible ? "" : "hidden"}`}
      expanded={!collapsed}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="50" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler-container"
          aria-controls="navbarScroll"
          onClick={() => setCollapsed(!collapsed)}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`ms-auto my-2 my-lg-0 ${
              isMd ? "gap-1" : "gap-4"
            }`}
            navbarScroll
            ref={ref}
          >
            {menuData2.map((item) => renderNavItem(item))}
          </Nav>
          {/*
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
          */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
