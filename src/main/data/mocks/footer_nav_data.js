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
        href: strings.mesa_partes_url,
        external: true
      },
    ],
  },
  {
    title: "Pregrado",
    children: [
      {
        title: "Facultad de Ciencias Administrativas y Financieras",
        href: "/facultades/ciencias-administrativas-y-financieras",
      },
      {
        title: "Facultad de Ingeniería Ambiental e Industrial",
        href: "/facultades/ingeniería-ambiental-e-industrial",
      },
      {
        title: "Facultad de Ingeniería de Sistemas Computacionales",
        href: "/facultades/ingeniería-de-sistemas-computacionales",
      },
      {
        title: "Facultad de Ingeniería Mecánica y Electrónica",
        href: "/facultades/ingeniería-mecánica-y-electrónica",
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
