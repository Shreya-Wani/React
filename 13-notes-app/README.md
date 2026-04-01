# 13 - Notes App 📝

## 📝 What This Covers

A functional **Notes App** that combines all previous concepts — state management, form handling, two-way binding, list rendering, and dynamic deletion. This is a hands-on **mini-project**.

## 🧠 Concepts Learned

- **Managing Multiple State Variables** — Separate states for `title`, `description`, and the `task` array
- **Adding Items to State Array** — Using the spread operator to copy the array and push new notes
- **Deleting Items by Index** — Using `splice()` on a copy of the array to remove a specific note
- **Controlled Form Inputs** — Both title and description use two-way binding
- **List Rendering** — Mapping over the tasks array to display note cards
- **Tailwind CSS for Layout** — Responsive split-layout (form on left, notes on right) using Tailwind

## ✨ Features

- ✅ Add notes with a title and description
- ✅ Display notes as styled sticky-note cards
- ✅ Delete individual notes
- ✅ Form clears after submission
- ✅ Responsive two-column layout

## 📂 File Structure

```
13-notes-app/
├── src/
│   ├── App.jsx              # Full notes app — form + note cards + delete
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**Adding a note:**
```jsx
const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({ title, description })
    setTask(copyTask)
    setTitle('')
    setDescription('')
}
```

**Deleting a note:**
```jsx
const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
}
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

This project ties together **state, forms, lists, and events** into a real, working application — demonstrating how React's concepts work together in practice.
