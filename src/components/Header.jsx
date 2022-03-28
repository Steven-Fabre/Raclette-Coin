import React from "react";
import logo from "../assets/raclettecoinombre2.png";

export default function Header() {
  return (
    <header>
      <a href="/" alt="Retour en haut de page">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="title">RACLETTE COIN</h1>
      </a>

      <nav>
        <a href="/presentation" alt="Naviguer vers Présentation">
          PRESENTATION
        </a>
        <a href="/product" alt="Naviguer vers Produit">
          PRODUIT
        </a>
        <a href="/faq" alt="Naviguer vers FAQ">
          FAQ
        </a>
        <a href="/contact" alt="Naviguer vers Contact">
          CONTACT
        </a>
      </nav>
    </header>
  );
}