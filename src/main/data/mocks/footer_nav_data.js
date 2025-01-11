import { strings } from "../strings";

export const footerNavData = [
  {
    title: "Nuestra universidad",
    children: [
      {
        title: "Misión, visión y valores",
        href: "/nosotros",
      },
      {
        title: "Reseña histórica",
        href: "/nosotros",
      },
      {
        title: "Organigrama",
        href: "/nosotros",
      },
      {
        title: "Directorio institucional",
        href: "/nosotros",
      },
      {
        title: "Mapa de campus",
        href: strings.google_maps_url,
        external: true,
      },
      {
        title: "Convenios",
        href: "/nosotros",
      },
      {
        title: "Memoria anual",
        href: "/nosotros",
      },
      {
        title: "Mesa de parte",
        href: "/nosotros",
      },
    ],
  },
  {
    title: "Pregrado",
    children: [
      {
        title: "Facultad de Ciencias Administrativas y Financieras",
        href: "/facultades/ciencias_administrativas",
      },
      {
        title: "Facultad de Ingeniería Ambiental e Industrial",
        href: "/carreras/ingenieria_ambiental",
      },
      {
        title: "Facultad de Ingeniería de Sistemas Computacionales",
        href: "#Carrera2",
      },
      {
        title: "Facultad de Ingeniería Mecánica y Electrónica",
        href: "#Carrera2",
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
