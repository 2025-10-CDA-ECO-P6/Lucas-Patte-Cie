"use client";

import { useState } from "react";

export default function AnimalDetailsClient({ animal, proprietaire, animalVaccins, animalVisites, personnel_veterinaire }) {
  const [showVisites, setShowVisites] = useState(true);

  return (
    <main style={{ padding: 20 }}>
      <h1>{animal.nom}</h1>
      <p><strong>Espèce :</strong> {animal.espece}</p>
      <p><strong>Race :</strong> {animal.race}</p>
      <p><strong>Date de naissance :</strong> {animal.date_naissance}</p>
      <p><strong>Poids :</strong> {animal.poids} kg</p>
      <p><strong>Propriétaire :</strong> {proprietaire ? `${proprietaire.nom} ${proprietaire.prenom}` : animal.proprietaire_id}</p>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setShowVisites(true)} style={{ marginRight: 10 }}>Visites médicales</button>
        <button onClick={() => setShowVisites(false)}>Vaccins</button>
      </div>

      <div style={{ marginTop: 20 }}>
        {showVisites ? (
          <div>
            <h2>Visites médicales</h2>
            {animalVisites.length > 0 ? (
              <ul>
                {animalVisites.map(v => {
                  const vet = personnel_veterinaire.find(pv => pv.id === v.veterinaire_id);
                  return (
                    <li key={v.id}>
                      {v.date_visite} - {vet ? `${vet.nom} ${vet.prenom}` : v.veterinaire_id}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>Aucune visite enregistrée.</p>
            )}
          </div>
        ) : (
          <div>
            <h2>Vaccins</h2>
            {animalVaccins.length > 0 ? (
              <ul>
                {animalVaccins.map(v => (
                  <li key={v.id}>
                    {v.nom} - Administré le {v.date_admin} - Prochain rappel le {v.prochain_rappel}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Aucun vaccin enregistré.</p>
            )}
          </div>
        )}
      </div>

      <a href="/" style={{ marginTop: 20, display: "inline-block" }}>⬅ Retour</a>
    </main>
  );
}
