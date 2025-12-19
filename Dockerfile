# 1. Image de base : on utilise une version légère de Node.js (Alpine Linux)
FROM node:18-alpine

# 2. Dossier de travail : c'est là que l'app vivra dans le conteneur
WORKDIR /app

# 3. Copie des fichiers de dépendances (Package.json)
# On fait ça en premier pour optimiser le cache de Docker
COPY package*.json ./

# 4. Installation des dépendances
RUN npm install

# 5. Copie du reste du code source vers le conteneur
COPY . .

# 6. Port de l'application : on informe Docker que l'app écoute sur le 3000
EXPOSE 3000

# 7. Commande de démarrage : lance l'application
CMD ["npm", "start"]