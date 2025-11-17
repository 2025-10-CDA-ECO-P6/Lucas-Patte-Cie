# Dictionnaire de données

## Animal
   
|Nom du champ|Type|Description|Exemple|
|---|---|---|---|
|id|string|Identifiant unique de l’animal|"a001"
|nom|string|Nom de l’animal|"Milo"
|espece|string|Espèce de l’animal|"Chat"
|race|string|Race de l’animal|"Siamois"
|date_naissance|string (date)|Date de naissance de l’animal (ISO 8601)|"2019-05-12"
|poids	number|	Poids|	4.2
|proprietaire_id|string|Référence à l’ID du propriétaire|"p001"


## Propriétaire

|Nom du champ|Type|Description|Exemple|
|---|---|---|---|
|id|string|Identifiant unique du propriétaire|"p001"
|nom|string|Nom du propriétaire|"Dupont"
|prenom|string|Prénom du propriétaire|"Claire"
|telephone|string|Numéro de téléphone|"0612345678"
|email|string|Adresse e-mail|"claire.dupont@mail.com"
|adresse|string|Adresse postale|"12 rue des Fleurs, Paris"

## Vaccin

|Nom du champ|Type|Description|Exemple|
|---|---|---|---|
|id|string|Identifiant unique du vaccin|"v001"
|nom|string|Nom du vaccin|"Rage"
|date_admin|string (date)|Date d’administration du vaccin|"2023-11-01"
|prochain_rappel|string (date)|Date du prochain rappel si applicable|"2024-11-01"

## Visite médicale

|Nom du champ|Type|Description|Exemple|
|---|---|---|---|
|id|string|Identifiant unique de la visite|"c001"
|animal_id|string|Référence à l’animal|"a001"
|date_visite|string (date)|Date de la visite|"2023-10-15"