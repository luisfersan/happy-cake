import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <Container
      className="d-flex flex-column justify-content-start align-items-center mt-3"
      style={{ minHeight: "80vh" }}
    >
      {children}
    </Container>
  );
};

export default Layout;
