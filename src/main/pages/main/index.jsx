import { React } from "react";
import MainCarousel from "./sections/carousel.jsx"
import Follow from "./sections/follow.jsx";
import Announcements from "./sections/announcements.jsx";
import Experiences from "./sections/experiences.jsx";

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