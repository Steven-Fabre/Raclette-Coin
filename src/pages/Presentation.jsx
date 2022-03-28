import React from "react";

export default function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation__simple">
        <h2>Simple</h2>
        <p>
          Investir dans les cryptomonnaies peut-être compliqué, la Raclette est construite pour un usage simple,
          utilisable par tout le monde
        </p>
      </div>
      <div className="presentation__securise">
        <h2>Sécurisé</h2>
        <p>
          La Raclette se repose sur une technologie d’empilage (Proof of stake) de tranches de fromages, et peut être
          appairé avec les Patates Token
        </p>
      </div>
      <div className="presentation__rapide">
        <h2>Rapide</h2>
        <p>
          Le Raclette Coin peut générer de la liquidité en quelques instants moyennant une source de chaleur suffisante
        </p>
      </div>
    </section>
  );
}
