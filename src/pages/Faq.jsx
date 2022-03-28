import React from "react";

export default function Faq() {
  return (
    <section className="faq">
      <div className="faq__what">
        <h4>Qu’est-ce-que le Raclette Coin ?</h4>
        <p>
          Le Raclette coin se différencie des autres cryptomonnaies grâce à son extraordinaire et dynamique communauté
          composée de personnes sympathiques, juste comme vous.
        </p>
      </div>
      <div className="faq__why">
        <h4>POURQUOI Y A-T-IL UNE RACLETTE SUR CETTE MONNAIE ?</h4>
        <p>
          La Raclette est notre amusante et sympathique mascotte ! La Raclette est un plat populaire dans le pays
          Savoyard qui représente la convivialité et le partage.
        </p>
      </div>
      <div className="faq__source">
        <h4>D’où viennent ces chiffres ?</h4>
        <p>
          Cette page n’a aucune valeur pour ce qui attrait à la Cryptomonnaie, cependant vous pouvez briller en société
          car les chiffres annoncés sont basés sur un rapport mené par les Echos
        </p>
        <a
          href="https://start.lesechos.fr/societe/culture-tendances/les-10-chiffres-a-savoir-sur-la-raclette-pour-briller-a-table-1371028#:~:text=65.000%20%C3%A0%2075.000,est%20constante%20depuis%20quatre%20ans"
          alt="La raclette en chiffres"
        >
          Source
        </a>
      </div>
    </section>
  );
}
