import useScrollTo from "@/hooks/useScrollTo";
import { React } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import "@/styles/table.css";

export default function Directory() {
  const ref = useScrollTo("section", "directorio");
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
          <b>Directorio institucional</b>
        </h2>
        <Table responsive className="text-center table-on-background">
          <thead>
            <tr>
              <th>Nro.</th>
              {Array.from({ length: 7 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table>
        <div className="d-flex pt-4 justify-content-center gap-2">
          <Button className="btn-on-background rounded-circle">
            <small>1</small>
          </Button>
          <Button className="btn-on-background-muted rounded-circle">
            <small>2</small>
          </Button>
          <Button className="btn-on-background-muted rounded-circle">
            <small>3</small>
          </Button>
        </div>
      </Container>
    </section>
  );
}
