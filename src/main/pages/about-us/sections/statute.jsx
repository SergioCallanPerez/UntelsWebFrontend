import { React } from "react";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { FaDownload } from "react-icons/fa6";
import useScrollTo from "@/hooks/useScrollTo";
import { isMobile } from "react-device-detect";

import statutePDF from "@/assets/pdfs/estatuto.pdf";

export default function Statute() {
  const ref = useScrollTo("section", "estatuto");
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
          <b>Estatuto</b>
        </h2>
        <div>
          {isMobile ? (
            <div className="text-center">
              <a href={statutePDF} download="untels_estatuto.pdf">
                <button className="m-auto btn-on-background mobile p-3">
                  Descargar archivo <FaDownload />
                </button>
              </a>
            </div>
          ) : (
            <embed
              src={statutePDF}
              type="application/pdf"
              width="100%"
              height="600px"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
