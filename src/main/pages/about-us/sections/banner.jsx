import { React } from "react";
import nosotrosIMG from "@/assets/aboutus_assets/top_image.png";
import { Container } from "react-bootstrap";
import "@/styles/banner.css";

export default function Banner() {
  return (
    <section>
      <Container fluid className="p-0 position-relative banner-container">
        <img src={nosotrosIMG} className="banner-img" alt="Universidad" />
        <div className="primary-opacity position-absolute p-4 text-center banner-card">
          <h2>
            Más que una universidad, una comunidad que inspira y construye
            futuro
          </h2>
        </div>
      </Container>
    </section>
  );
}
