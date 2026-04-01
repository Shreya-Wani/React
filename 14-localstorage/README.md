# 14 - LocalStorage 💾

## 📝 What This Covers

This project explores the **Web Storage API** — specifically `localStorage` and `sessionStorage` — for persisting data in the browser across sessions.

## 🧠 Concepts Learned

- **`localStorage.setItem()`** — Storing key-value pairs in the browser
- **`localStorage.getItem()`** — Retrieving stored values
- **`localStorage.removeItem()`** — Deleting specific items
- **`localStorage.clear()`** — Clearing all stored data
- **`sessionStorage`** — Similar to localStorage but data is cleared when the tab/browser is closed
- **Storing Objects** — Using `JSON.stringify()` to save objects and `JSON.parse()` to retrieve them

## 📂 File Structure

```
14-localstorage/
├── src/
│   ├── App.jsx              # Demonstrates all localStorage operations
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**Basic operations:**
```jsx
localStorage.setItem('name', 'John Doe')
localStorage.setItem('age', '30')

const name = localStorage.getItem('name')

localStorage.removeItem('name')
```

**Storing and retrieving objects:**
```jsx
const user = { name: 'John Doe', age: 30, city: 'New York' }

// Store object (must convert to string)
localStorage.setItem('user', JSON.stringify(user))

// Retrieve object (must parse back)
const userData = JSON.parse(localStorage.getItem('user'))
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

`localStorage` only stores **strings**. To store objects or arrays, you must use `JSON.stringify()` when saving and `JSON.parse()` when reading. Data in localStorage **persists even after closing the browser**, unlike sessionStorage.
