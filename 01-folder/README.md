# 01 - Project Setup & Basics 📁

## 📝 What This Covers

This is the **first project** in the React learning series — focused on understanding the **Vite + React project structure** and how a React app boots up.

## 🧠 Concepts Learned

- **Vite Project Setup** — How to scaffold a React app using Vite
- **Folder Structure** — Understanding the purpose of `src/`, `public/`, `index.html`, `vite.config.js`, etc.
- **Entry Point (`main.jsx`)** — How `createRoot` mounts the React app to the DOM
- **JSX Fundamentals** — Writing HTML-like syntax inside JavaScript
- **`App.jsx`** — The root component that serves as the starting point of the UI

## 📂 File Structure

```
01-folder/
├── public/
├── src/
│   ├── App.jsx          # Root component (empty — focus is on setup)
│   ├── main.jsx         # Entry point — mounts App to DOM
│   └── index.css        # Global styles
├── index.html           # HTML template with root div
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies & scripts
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

Before writing any React code, it's important to understand **how the project is structured** and how the app bootstraps from `index.html` → `main.jsx` → `App.jsx`.
