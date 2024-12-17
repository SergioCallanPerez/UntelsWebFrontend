import { React } from "react";
import Header from "../../components/header";
import MainCarousel from "./carousel.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
  return (
    <main>
      <Header />
      <MainCarousel />
      <p>Hello world</p>
    </main>
  );
}
