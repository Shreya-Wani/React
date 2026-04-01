# 05 - CSS Modules 🎨

## 📝 What This Covers

This project explores **CSS Modules** — a scoped styling approach in React where CSS classes are locally scoped to the component that imports them.

## 🧠 Concepts Learned

- **CSS Modules (`.module.css`)** — Writing scoped styles that don't leak to other components
- **Importing Styles as Objects** — Using `import styles from './Component.module.css'` and applying via `className={styles.btn}`
- **Component-Level Styling** — Each component has its own CSS file, keeping styles organized and collision-free
- **Folder Structure per Component** — Grouping each component with its CSS module (`button/Button.jsx` + `button/Button.module.css`)

## 📂 File Structure

```
05-css/
├── src/
│   ├── App.jsx                            # Composes Header + Button
│   ├── components/
│   │   ├── button/
│   │   │   ├── Button.jsx                 # Button with module CSS class
│   │   │   └── Button.module.css          # Scoped button styles
│   │   └── header/
│   │       ├── Header.jsx                 # Header with logo + login button
│   │       └── Header.module.css          # Scoped header styles
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**Button.jsx** — Using CSS Module styles:
```jsx
import styles from './Button.module.css'

const Button = () => {
  return <div className={styles.btn}>This is a button</div>
}
```

**Header.jsx** — Header with multiple scoped CSS classes:
```jsx
<div className={styles.header}>
    <h3 className={styles.logo}>Shreya Wani</h3>
    <button className={styles.btn}>Login</button>
</div>
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

CSS Modules provide **automatic class name scoping**, preventing style conflicts between components. Each component gets its own isolated styles.
