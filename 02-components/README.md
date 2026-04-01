# 02 - Components 🧩

## 📝 What This Covers

This project introduces **React components** — the building blocks of any React application. Learn how to create, import, and compose reusable UI pieces.

## 🧠 Concepts Learned

- **Functional Components** — Creating components as JavaScript functions that return JSX
- **Component Composition** — Combining multiple components (`Navigation` + `Card`) inside `App`
- **Import / Export** — Using `export default` and `import` to share components across files
- **Component Folder Structure** — Organizing components inside a `components/` directory

## 📂 File Structure

```
02-components/
├── src/
│   ├── App.jsx                    # Composes Navigation + Card components
│   ├── components/
│   │   ├── Card.jsx               # Displays a card with heading & text
│   │   └── Navigation.jsx         # Displays a navigation bar heading
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**App.jsx** — Composes two child components:
```jsx
<Navigation />
<Card />
```

**Card.jsx** — A simple card with a heading and paragraph text.

**Navigation.jsx** — A basic navigation bar component.

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

React apps are built by **splitting the UI into small, reusable components** and composing them together in a parent component.
