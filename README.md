# Diapo vidéo / Arduino

Caroussel vidéo contrôlé par arduino

## App Electron

Le dossier Slider contient les sources pour le carousel vidéo.

## Code arduino

Le dossier Arduino contient les sources de la carte arduino utilisée pour controler le carousel

## Tuto

### Instalation des dépendances

Après avoir cloné le repo entrez la commande ` npm install ` pour installer les dépendances

### Démarer le projet 

` electron . `

### Créer un executable de projet

` ./node_modules/.bin/electron-builder `
Si une erreur apparait le paquet electron builder n'est peut-être pas installé. Entre la commande ` yarn add electron-builder --dev ` puis essayer de nouveau la commande ` ./node_modules/.bin/electron-builder `
