# 🎨 Frontend - Facebook Clone

![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-cyan?style=for-the-badge) ![Axios](https://img.shields.io/badge/Axios-0.27.2-yellow?style=for-the-badge)

## 📝 Projektbeschreibung
Dieses Repository enthält das **Frontend** für den Facebook-Klon, entwickelt mit **React.js** und **Tailwind CSS**. Benutzer können Beiträge erstellen, Profile verwalten und mit anderen interagieren.

## 🚀 Technologien & Abhängigkeiten
- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Datenabruf:** Axios für API-Anfragen
- **State-Management:** Zustand oder Redux

## ⚙️ Installation & Setup
### 📥 1. Repository klonen
```bash
git clone <repo-url>
cd facebook-frontend
```

### 📦 2. Abhängigkeiten installieren
```bash
npm install
```

### 🔧 3. Umgebungsvariablen einrichten
Erstelle eine `.env`-Datei und füge folgende Umgebungsvariablen hinzu:
```env
REACT_APP_API_URL=http://localhost:8000
```

### 🚀 4. Entwicklungsserver starten
```bash
npm start
```

## 📁 Projektstruktur
```
facebook-frontend/
├── public/            # Statische Dateien
├── src/               # Hauptverzeichnis für React-Code
│   ├── components/    # Wiederverwendbare UI-Komponenten
│   ├── pages/         # Seitenkomponenten (Home, Profile, etc.)
│   ├── services/      # API-Anfragen mit Axios
│   ├── context/       # State-Management
│   ├── App.js         # Haupteinstiegspunkt
│   ├── index.js       # Einstiegspunkt für ReactDOM
├── .gitignore         # Dateien, die nicht ins Repo gehören
├── tailwind.config.js # Tailwind CSS Konfiguration
├── package.json       # Abhängigkeiten und Skripte
└── README.md          # Dokumentation
```

## 💻 Verfügbare Skripte
| Befehl         | Beschreibung                          |
|---------------|----------------------------------|
| `npm start`   | Startet die Entwicklungsumgebung |
| `npm run build` | Erstellt eine Produktionsversion |
| `npm test`   | Führt Tests aus |

## 🔗 API-Verbindung
Das Frontend kommuniziert mit dem Backend unter `REACT_APP_API_URL`. Stelle sicher, dass das Backend gestartet ist.

## 📜 Lizenz
Dieses Projekt ist unter der **MIT License** lizenziert. 🎯

