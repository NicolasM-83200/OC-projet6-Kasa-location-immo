
<img width="600" alt="Capture d'écran 2023-12-05 093723" src="https://github.com/NicolasM-83200/OC-projet6-Kasa-location-immo/assets/130040163/dc0c17d4-e35c-4537-9720-b484e14e7bb3">

<img width="175" alt="Capture d'écran 2023-12-05 093759" src="https://github.com/NicolasM-83200/OC-projet6-Kasa-location-immo/assets/130040163/c9d12ffc-518f-4cf6-9d74-e2c02331acda">

# Créez une application web de location immobilière avec React

## Contexte
Kasa me recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web.Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.

## Contraintes fonctionnelles

Quelques précisions sur les fonctionnalités du site :

- Pour le défilement des photos dans la galerie (composant Carousel) :
  - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
  - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
  - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Compétences évaluées

- Mettre en oeuvre des animations CSS
- Développer une interface avec SASS
- Configurer la navigation entre les pages de l'application avec React Router
- Développer des éléments de l'interface d'un site web grâce à des composants React
- Initialiser une application avec Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Pour démarrer le projet :

### `npm start'
