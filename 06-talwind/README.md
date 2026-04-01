# 06 - Tailwind CSS 🌊

## 📝 What This Covers

This project demonstrates how to **integrate Tailwind CSS v4** with a Vite + React project and use utility-first classes for styling.

## 🧠 Concepts Learned

- **Tailwind CSS v4 Setup** — Installing and configuring Tailwind via `@tailwindcss/vite` plugin
- **Utility-First Styling** — Using pre-built utility classes instead of writing custom CSS
- **Flexbox Utilities** — Layout with `flex`, `items-center`, `justify-center`
- **Responsive Design** — Using Tailwind's responsive and spacing utilities
- **Dark Background** — Applying `bg-gray-800` and `h-screen` for a full-screen dark layout

## 📂 File Structure

```
06-talwind/
├── src/
│   ├── App.jsx              # Uses Tailwind classes for layout
│   ├── main.jsx
│   └── index.css            # Imports Tailwind base styles
├── vite.config.js           # Includes @tailwindcss/vite plugin
└── ...
```

## 🔍 Code Highlights

**vite.config.js** — Tailwind v4 plugin setup:
```js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**App.jsx** — Using utility classes directly:
```jsx
<div className='bg-gray-800 h-screen flex items-center justify-center'>
  {/* Content */}
</div>
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

Tailwind CSS lets you style components **without writing any custom CSS** — everything is done through utility classes directly in JSX, enabling rapid UI development.
