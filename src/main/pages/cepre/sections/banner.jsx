import { React } from "react";
import cepreBanner from "@/assets/cepre_assets/ceprebanner.jpg";
import { Container } from "react-bootstrap";
import "@/styles/banner.css";

export default function Banner() {
  return (
    <section>
      <Container fluid className="p-0 position-relative banner-container">
        <img src={cepreBanner} className="banner-img" alt="Universidad" />
        <div className="primary-opacity position-absolute p-4 text-center banner-card">
          <h2>
            Centro Preuniversitario
          </h2>
        </div>
      </Container>
    </section>
  );
}
