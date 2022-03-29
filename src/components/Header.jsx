import React from "react";
import logo from "../assets/raclettecoinombre.png";

export default function Header() {
  return (
    <header>
      <a className="logo" href="#hero" alt="Retour en haut de page">
        <img className="logo__img" src={logo} alt="logo" />
        <h1 className="logo__title">RACLETTE COIN</h1>
      </a>

      <nav>
        <a href="#presentation" alt="Naviguer vers Présentation">
          PRESENTATION
        </a>
        <a href="#produit" alt="Naviguer vers Produit">
          PRODUIT
        </a>
        <a href="#faq" alt="Naviguer vers FAQ">
          FAQ
        </a>
      </nav>
    </header>
  );
}
