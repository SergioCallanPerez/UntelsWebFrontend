import { React } from "react";
import MainCarousel from "./carousel.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Follow from "./follow.jsx";
import Announcements from "./announcements.jsx";
import '../../styles/main_index.css'
import Header from "../../components/header";

export default function Main() {
  return (
    <main>
      <Header />
      <body>
        <MainCarousel />
        <Announcements />
        <Follow />
      </body>
    </main>
  );
}
