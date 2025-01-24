import { strings } from "../strings";

export const navData = [
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
          { title: "Ingeniería Ambiental", href: "/carreras/ingenieria_ambiental" },
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
  {
    title: "Centro Pre",
    children: [
      {title: "Infórmate", href: "/cepre/informate"},
      {title: "Web del Centro Pre", href: strings.centro_pre_url}
    ],
  }
];