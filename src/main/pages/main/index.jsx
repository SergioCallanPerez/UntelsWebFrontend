import { React } from "react";
import Header from "../../components/header";
import MainCarousel from "./carousel.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/main_index.css'

export default function Main() {
  return (
    <main>
      <Header />
      <body>
        <MainCarousel />
        <p>Hello world</p>
      </body>
    </main>
  );
}
