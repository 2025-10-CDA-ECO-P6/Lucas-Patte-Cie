import { animaux, proprietaires, vaccins, visites_medicales, personnel_veterinaire } from "../../data/data";
import { notFound } from "next/navigation";
import AnimalDetailsClient from "./animalDetailsClient";

export async function generateStaticParams() {
  return animaux.map(animal => ({ id: animal.id }));
}

export default async function AnimalPage({ params }) {
  const { id } = await params;

  const animal = animaux.find(a => a.id === id);
  if (!animal) notFound();

  const proprietaire = proprietaires.find(p => p.id === animal.proprietaire_id);
  const animalVaccins = vaccins.filter(v => v.animal_id === animal.id);
  const animalVisites = visites_medicales.filter(c => c.animal_id === animal.id);

  return (
    <AnimalDetailsClient
      animal={animal}
      proprietaire={proprietaire}
      animalVaccins={animalVaccins}
      animalVisites={animalVisites}
      personnel_veterinaire={personnel_veterinaire}
    />
  );
}
