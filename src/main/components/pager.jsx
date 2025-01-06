import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "@/styles/pager.css"

export default function PagerView({ children, onBackground }) {
  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const chunkedChildren = React.Children.toArray(children).reduce(
    (resultArray, child, index) => {
      const chunkIndex = Math.floor(index / (isMd? 1:3));
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(child);
      return resultArray;
    },
    []
  );

  return (
    <Carousel className={`pager-main ${onBackground? "on-background": ""}`}>
      {chunkedChildren.map((group, index) => (
        <Carousel.Item key={`pager-item-${index}`} interval={4000}>
          <Row className="px-3">
            {group.map((child, idx) => (
              <Col
                key={idx}
                xs={12}
                md={4}
              >
                {child}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
