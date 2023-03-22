import React, { useContext, useEffect } from "react";
import { CustomContext } from "../../utils/Context";
import About from "./About/About";
import Filter from "./Filter/Filter";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";

const Home = () => {
  const { getAllProducts } = useContext(CustomContext);
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <Hero />
      <Filter />
      <Products />
      <About />
    </>
  );
};

export default Home;
