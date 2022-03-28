import React from "react";
import bigraclette from "../assets/bigraclettesvg.svg";

export default function Hero() {
  return (
    <section className="home">
      <p className="introduction">
        Le Raclette Coin est la monnaie coulante décentralisée, open source, qui se partage entre amateurs de fromages
      </p>
      <img className="bigraclette" src={bigraclette} alt="La monnaie la plus coulante" />
    </section>
  );
}
