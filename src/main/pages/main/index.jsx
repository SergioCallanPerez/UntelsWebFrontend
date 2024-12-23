import { React } from "react";
import MainCarousel from "./carousel.jsx"
import Follow from "./follow.jsx";
import Announcements from "./announcements.jsx";
import '../../styles/main_index.css'
import Experiences from "./experiences.jsx";

export default function Main() {
  return (
    <main className="d-flex flex-column gap-4 pb-4" >
      <MainCarousel />
      <Announcements />
      <Experiences/>
      <Follow />
    </main>
  );
}