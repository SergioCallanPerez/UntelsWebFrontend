import { React } from "react";
import Header from "../../components/header";
import MainCarousel from "./carousel.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main_index.css'
import Announcements from "./announcements.jsx"
import Experiences from "./experiences.jsx";

export default function Main() {
  return (
    <main>
      <Header />
      <body>
        <MainCarousel />
        <Announcements/>
        <h2>Experiencias de éxito</h2>
        <Experiences/>
        <p>Hello world</p>
      </body>
    </main>
  );
}
