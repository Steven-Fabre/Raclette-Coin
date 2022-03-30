import React from "react";
import bigraclette from "../assets/bigspatule.svg";
import bigcoulant from "../assets/bigcoulant.svg";
import bigsticky from "../assets/bigsticky.svg";
import bigdowncheese from "../assets/bigdowncheese.svg";
import bigassiette from "../assets/bigassiette.svg";

export default function BigRaclette() {
  const root = document.querySelector("#root");

  const scrollEvent = () => {
    const coulant = document.querySelector(".bigraclette--coulant");
    const downcheese = document.querySelector(".bigraclette--downcheese");
    const assiette = document.querySelector(".bigraclette--assiette");
    coulant.style.height = `${root.scrollTop}px`;

    if (root.scrollTop / root.scrollHeight > 0.7) {
      assiette.style.top = "30vw";
      downcheese.style.maxHeight = "500px";
      downcheese.style.transition = "all 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s";
    } else {
      assiette.style.top = "300vw";
      downcheese.style.maxHeight = "0";
      downcheese.style.transition = "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)";
    }
  };
  root.addEventListener("scroll", scrollEvent);

  return (
    <div className="bigraclette">
      <img className="bigraclette--spatule" src={bigraclette} alt="La monnaie la plus coulante" />
      <div className="bigraclette--cheesy">
        <img className="bigraclette--coulant" src={bigcoulant} alt="La monnaie la plus coulante" />
        <img className="bigraclette--sticky" src={bigsticky} alt="La monnaie la plus coulante" />
      </div>
      <img className="bigraclette--downcheese" src={bigdowncheese} alt="La monnaie la plus coulante" />
      <img className="bigraclette--assiette" src={bigassiette} alt="La monnaie la plus coulante" />
    </div>
  );
}
