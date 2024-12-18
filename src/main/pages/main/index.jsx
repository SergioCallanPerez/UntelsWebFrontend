import { React } from "react";
import MainCarousel from "./carousel.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Follow from "./follow.jsx";

export default function Main() {
  return (
    <main>
      <MainCarousel />
      <p>Hello world</p>
      <Follow />
    </main>
  );
}
