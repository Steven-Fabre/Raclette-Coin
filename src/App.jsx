import React from "react";
import BigRaclette from "./components/BigRaclette";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Hero";
import Presentation from "./pages/Presentation";
import Product from "./pages/Product";
import "./styles/style.scss";

function App() {
  return (
    <React.Fragment>
      <BigRaclette />
      <Header />
      <Home />
      <Presentation />
      <Product />
      <Faq />
      <Contact />
    </React.Fragment>
  );
}

export default App;
