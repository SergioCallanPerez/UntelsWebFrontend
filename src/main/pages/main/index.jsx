import { React } from "react";
import MainCarousel from "./carousel.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Follow from "./follow.jsx";
import Announcements from "./announcements.jsx";
import '../../styles/main_index.css'
import Experiences from "./experiences.jsx";

export default function Main() {
  return (
    <main>
      <body>
        <MainCarousel />
        <Announcements />
        <h2>Experiencias de éxito</h2>
        <Experiences/>
        <Follow />
      </body>
    </main>
  );
}