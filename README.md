# Application Full-Stack

## Description du projet
Cette application illustre une architecture full‑stack simple.

* **Objectif** : exposer une API REST pour enregistrer et consulter des "status checks" et offrir une interface web pour interagir avec ces données.
* **Technologies** :
  * Backend : [FastAPI](https://fastapi.tiangolo.com/) avec MongoDB.
  * Frontend : [React](https://react.dev/) construit avec CRACO et Tailwind CSS.
* **Structure** :
  * `backend/` – serveur FastAPI et configuration Python.
  * `frontend/` – application React.
  * `tests/` – dossier pour les tests automatisés.

## Installation et exécution

### Backend
1. Se placer dans le dossier `backend`.
2. Installer les dépendances :
   ```bash
   pip install -r requirements.txt
   ```
3. Lancer le serveur de développement :
   ```bash
   uvicorn server:app --reload
   ```

### Frontend
1. Se placer dans le dossier `frontend`.
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Lancer le serveur de développement :
   ```bash
   npm start
   ```

## Tests

### Backend
Exécuter les tests Python :
```bash
pytest
```

### Frontend
Exécuter les tests JavaScript :
```bash
npm test
```

