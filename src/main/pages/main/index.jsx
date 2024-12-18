import { React } from "react";
import Header from "../../components/header";
import MainCarousel from "./carousel.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./news.jsx";

export default function Main() {
  return (
    <main>
      <Header />
      <MainCarousel />
      <News />
      <p>Hello world</p>
    </main>
  );
}
