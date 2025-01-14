import useScrollTo from "@/hooks/useScrollTo";
import { React } from "react";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import Chart from "@/assets/aboutus_assets/organigrama.png";

export default function OrganizationChart() {
  const ref = useScrollTo("section", "organigrama");
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
          <b>Organigrama</b>
        </h2>
        <img src={Chart} width="100%"/>
      </Container>
    </section>
  );
}
