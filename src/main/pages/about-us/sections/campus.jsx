import { React } from "react";
import { useMediaQuery } from "react-responsive";
import { Container } from "react-bootstrap";

import useScrollTo from "@/hooks/useScrollTo";
import mapIMG from "@/assets/MapaCampusUniversitario.png";

export default function Campus() {
  const ref = useScrollTo("section", "campus");
  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <section ref={ref}>
      <Container>
        <h2
          className={`background-title ${
            isMd ? "with-underline" : "with-underline-left"
          } text-md-start text-center mb-5`}
        >
          <b>Mapa del campus</b>
        </h2>

        <img src={mapIMG} width="100%" />
      </Container>
    </section>
  );
}
