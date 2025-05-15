import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import HeroImage from "../../assets/images/hero.png";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover", // pour que l’image couvre tout le div
        backgroundPosition: "center", // pour centrer l’image
        backgroundRepeat: "no-repeat", // évite les répétitions
        height: "100vh",
      }}
    >
      <section
        className="hero-section d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          height: "100%",
          paddingTop: "70px",
        }}
      >
        <Container>
          <Row className="align-items-center text-white">
            {/* Texte à gauche */}
            <Col md={8} className="text-start">
              <h1
                className="display-4 fw-bold mb-4"
                style={{ fontSize: "2rem" }}
              >
                Unlock the world of knowledge, imagination, and discovery <br />
                anytime, anywhere, with{" "}
                <span className="text-primary">DigitalBook</span>
              </h1>

              <p className="lead text-light mb-4">
                All your books in one place. Track your borrowing history,
                manage reservations effortlessly, and gain valuable insights
                into your library.
              </p>

              {/* Barre de recherche stylisée */}
              <div
                className="d-flex align-items-center rounded-pill px-3 mb-3"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  maxWidth: "500px",
                  height: "50px",
                }}
              >
                <Form.Control
                  type="text"
                  placeholder="Find your book here"
                  className="border-0 shadow-none text-white"
                  style={{
                    backgroundColor: "transparent",
                    flex: 1,
                    height: "100%",
                  }}
                />
                <FaSearch color="white" />
              </div>
              <Button
                variant="primary"
                className="rounded-pill px-4 py-2"
                style={{
                  backgroundColor: "#007bff", // bleu classique
                  border: "1px solid #007bff", // bordure bleue
                  color: "#fff", // texte blanc
                }}
              >
                Get started
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HeroSection;
