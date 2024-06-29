import React from "react";
import Layout from "../components/Layout";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <Layout>
      <h1 className="text-center mb-3">Bienvenido a Happy Cake</h1>
      <p className="text-center mb-3">El lugar de los pasteles felices.</p>
      <Image
        src="/happy-cake.jpg"
        alt="Happy Cake"
        className="img-fluid mt-3"
      />
    </Layout>
  );
};

export default Home;
