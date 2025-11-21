Voici un **README simple, propre et clair**, parfait pour ton projet :

---

# 🐾 Gestion des Animaux – Projet Next.js

Ce projet est une petite application réalisée avec **Next.js 16** permettant d’afficher une liste d’animaux puis consulter leur fiche détaillée, incluant :

* Informations de l’animal
* Informations du propriétaire
* Liste des visites médicales
* Liste des vaccins

Les données sont stockées dans un fichier local dans `app/data/data.js`.

---

## 🚀 Fonctionnalités

### ✅ Page d’accueil

* Affiche la liste des animaux sous forme de cartes.
* Chaque carte permet d’accéder à la page détaillée de l’animal.

### ✅ Page détaillée d’un animal

* Affiche les informations de l’animal avec un design personnalisé.
* Affiche automatiquement les visites médicales.
* Boutons permettant de basculer entre :

  * **Visites médicales**
  * **Vaccins**
* Les informations médicales sont affichées sous forme de cartes verticales.
* Informations du propriétaire visibles directement.

---

## 📁 Structure du projet

```
app/
 ├─ page.js                → Page d’accueil
 ├─ globals.css            → Style global
 ├─ animal/
 │    ├─ [id]/
 │    │     ├─ page.js     → Récupération des données
 │    │     └─ animalDetailsClient.js
 └─ data/
       └─ data.js          → Données locales (animaux, propriétaires, etc.)
```

---

