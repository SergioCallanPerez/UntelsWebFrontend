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
import { navData } from "@/data/mocks/nav_data";
import "@/styles/header.css";

const portalURL =
  "http://transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=13444#.XwbQV21KjIV";

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
      className={`background sticky-top ${headerVisible ? "" : "hidden"}`}
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
            {navData.map((item) => renderNavItem(item))}
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
