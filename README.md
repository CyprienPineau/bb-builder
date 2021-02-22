
## Introduction

Cette application a pour but de créer des listes d'équipes pour le jeux Blood Bowl conformément aux règles de 2020.
(https://www.games-workshop.com/fr-FR/Blood-Bowl-Second-Season-Edition-fre-2020)

Cette application a vocation d'être un outil de calculs rapides pour les joueurs amateurs de compétitions en leur fournissant le moyen d'exporter sous PDF leur équipe pour une éventuelle impression.

Elle est actuellement en état d'ébauche permettant d'en saisir les tenants et aboutissants.

## Stack Technique

React Js, Next Js, utilisation d'une API Github en attendant une BDD sous strapi par exemple
Génération des Pdf avec react-pdf (https://react-pdf.org)

## BDD

Les données sont stockées actuellement sur git, accessible à l'adresse suivante https://cyprienpineau.github.io/data-bb-builder/teams.json

------------

## TODO

- Ajout du Staff d'équipe
- Ajout de la personnalisation ( définir les noms des joueurs, le nom de l'équipe , charger une image d'équipe pour remplacer celle par défault)
- Complétion de la BDD avec des données de jeu
- Migration de la BDD sur Strapi par exemple
- Finalisation de la fiche d'équipe générer pour avoir les détails de gameplay
- Possibilité d'importer/exporter une équipe via un fichier (CSV ?)

