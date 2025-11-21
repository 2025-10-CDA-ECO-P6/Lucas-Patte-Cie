"use client";

import { useState } from "react";
import "./animalDetails.css";

export default function AnimalDetailsClient({
  animal,
  proprietaire,
  animalVaccins,
  animalVisites,
  personnel_veterinaire
}) {
  const [showVisites, setShowVisites] = useState(true);

  return (
    <div className="page-container">

      {/* ===== Carte violet avec infos ===== */}
      <div className="animal-card">
        <h1 className="animal-title">{animal.nom}</h1>

        <div className="info-pill">
          <div className="info-pill-left">{/* label */}Espèce</div>
          <div className="info-pill-right">{animal.espece}</div>
        </div>

        <div className="info-pill">
          <div className="info-pill-left">Race</div>
          <div className="info-pill-right">{animal.race}</div>
        </div>

        <div className="info-pill">
          <div className="info-pill-left">Date de naissance</div>
          <div className="info-pill-right">{animal.date_naissance}</div>
        </div>

        <div className="info-pill">
          <div className="info-pill-left">Poids</div>
          <div className="info-pill-right">{animal.poids} kg</div>
        </div>

        <div className="info-pill">
          <div className="info-pill-left">Propriétaire</div>
          <div className="info-pill-right">
            {proprietaire ? `${proprietaire.prenom} ${proprietaire.nom}` : animal.proprietaire_id}
          </div>
        </div>

      </div>

      {/* ===== Boutons toggle ===== */}
      <div className="toggle-container">
        <button
          className={`toggle-button ${showVisites ? "active" : "inactive"}`}
          onClick={() => setShowVisites(true)}
        >
          Visites médicales
        </button>
        <button
          className={`toggle-button ${!showVisites ? "active" : "inactive"}`}
          onClick={() => setShowVisites(false)}
        >
          Vaccins
        </button>
      </div>

      {/* ===== Liste des visites / vaccins ===== */}
      <div>
        {showVisites ? (
          <>
          {animalVisites.length > 0 ? (
            <div className="list-container">
              {animalVisites.map(v => {
                const vet = personnel_veterinaire.find(pv => pv.id === v.veterinaire_id);
                return (
                  <div key={v.id} className="list-item">
                    <div className="list-row"><strong>Date :</strong> {v.date_visite}</div>
                    <div className="list-row"><strong>Vétérinaire :</strong> {vet ? `${vet.prenom} ${vet.nom}` : v.veterinaire_id}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Aucune visite enregistrée.</p>
          )}
          </>
        ) : (
          <>
          {animalVaccins.length > 0 ? (
            <div className="list-container">
              {animalVaccins.map(v => (
                <div key={v.id} className="list-item">
                  <div className="list-row"><strong>Nom :</strong> {v.nom}</div>
                  <div className="list-row"><strong>Administré le :</strong> {v.date_admin}</div>
                  <div className="list-row"><strong>Prochain rappel :</strong> {v.prochain_rappel}</div>
                </div>
              ))}
            </div>
          ) : (
            <p>Aucun vaccin enregistré.</p>
          )}
          </>
        )}
      </div>

      <a href="/" className="back-link">⬅ Retour</a>
    </div>
  );
}
