import Link from "next/link";
import { animaux } from "./data/data";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Liste des animaux</h1>

      <ul>
        {animaux.map(animal => (
          <li key={animal.id} style={{ marginBottom: 10 }}>
            <Link href={`/animal/${animal.id}`}>
              {animal.nom} — {animal.espece}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
