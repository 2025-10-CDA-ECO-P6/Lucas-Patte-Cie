import Link from "next/link";
import { animaux } from "./data/data";
import "./home.css"; // <-- ajout du fichier CSS

export default function Home() {
  return (
    <main>
      <h1>Liste des animaux</h1>

      <div className="cards-container">
        {animaux.map(animal => (
          <Link key={animal.id} href={`/animal/${animal.id}`} className="card">
            <h2>{animal.nom}</h2>
            <p>{animal.espece} — {animal.race}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
