import React from "react";
import bigraclette from "../assets/bigspatule.svg";

export default function BigRaclette() {
  return (
    <div className="bigraclette">
      <img className="bigraclette--svg" src={bigraclette} alt="La monnaie la plus coulante" />
    </div>
  );
}
