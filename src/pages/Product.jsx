import React from "react";

export default function Product() {
  return (
    <section id="produit" className="product">
      <p className="product__production">
        <span>75.000</span> Tonnes de Raclette produite en 2020
      </p>
      <p className="product__potatoes">
        <span>5</span> patates mangées pour une tranche de Raclette en moyenne
      </p>
      <p className="product__preference">
        <span>71%</span> des Français préfèrent la Raclette à la Fondue Savoyarde
      </p>
      <p className="product__sells">
        <span>+300%</span> de vente d’appareils à Raclette vendus en 2020
      </p>
    </section>
  );
}
