import { React } from "react";
import MainCarousel from "./sections/carousel.jsx"
import Follow from "./sections/follow.jsx";
import Announcements from "./sections/announcements.jsx";
import Experiences from "./sections/experiences.jsx";
import Achievements from "./sections/achievements.jsx";

export default function Main() {
  return (
    <main className="d-flex flex-column gap-2 pb-2" >
      <MainCarousel />
      <Achievements />
      <Announcements />
      <Experiences/>
      <Follow />
    </main>
  );
}