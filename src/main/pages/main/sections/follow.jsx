import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Row, Col } from "react-bootstrap";

export default function Follow() {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const updateFacebookContainerDimension = () => {
    var facebookContainer = document.getElementById("facebook-container");
    console.log({
      height: facebookContainer.clientHeight,
      width: facebookContainer.clientWidth,
    });
    setDimensions({
      height: facebookContainer.clientHeight,
      width: facebookContainer.clientWidth - 22,
    });
  };

  useEffect(() => {
    updateFacebookContainerDimension();
    window.addEventListener("resize", updateFacebookContainerDimension);
    return () => {
      window.removeEventListener("resize", updateFacebookContainerDimension);
    };
  }, []);

  return (
    <section className="py-4">
      <Container>
        <h2 className="pb-3 text-center text-md-start on-background-title with-h-divider-on-background on-background-title">
          <b>Síguenos</b>
        </h2>
        <Row className="d-flex">
          <Col xs={12} md={6} className="d-flex flex-grow-2 mb-3 mb-md-0">
            <iframe
              id="player"
              type="text/html"
              width="100%"
              style={{ aspectRatio: 16 / 9 }}
              src="http://www.youtube.com/embed/02bEV3UWXHU"
              frameBorder="0"
              title="Untels YouTube Video"
              allowFullScreen
            ></iframe>
          </Col>
          <Col
            xs={12}
            md={3}
            id="facebook-container"
            className="d-flex flex-grow-1 mb-3 mb-md-0"
          >
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Funtelsperu&tabs=timeline&width=${dimensions.width}&height=${dimensions.height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
              width="100%"
              height={isMd ? "510" : "100%"}
              scrolling="no"
              frameBorder="0"
              title="Untels Facebook Page"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </Col>
          <Col xs={12} md={3} className="d-flex flex-grow-1">
            <iframe
              src="https://www.instagram.com/untelsoficial/embed"
              width="100%"
              height={isMd ? "450" : "100%"}
              frameBorder="0"
              title="Untels Instagram Feed"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
