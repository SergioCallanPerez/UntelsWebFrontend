import { React } from "react";
import MainCarousel from "./sections/carousel.jsx";
import Follow from "./sections/follow.jsx";
import Announcements from "./sections/announcements.jsx";
import Experiences from "./sections/experiences.jsx";
import Achievements from "./sections/achievements.jsx";
import AcademicPrograms from "./sections/academic_programs.jsx";
import CampusLife from "./sections/campus_life.jsx";
import Benefits from "./sections/benefits.jsx";
import AdmissionAd from "./sections/admission_ad.jsx";
import News from "./sections/news.jsx";
import Redirection from "./sections/redirection.jsx";

export default function Main() {
  return (
    <main className="d-flex flex-column gap-5 pb-5">
      <MainCarousel />
      <Achievements />
      <Benefits />
      <AcademicPrograms />
      <CampusLife />
      <AdmissionAd />
      <News />
      <Announcements />
      <Experiences />
      {
        //  <Follow />
      }
    </main>
  );
}
