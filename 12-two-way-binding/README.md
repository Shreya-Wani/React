# 12 - Two-Way Binding 🔗

## 📝 What This Covers

This project demonstrates **two-way data binding** — where an input field's value is both **controlled by React state** and **updated by user input**, keeping the UI and state perfectly in sync.

## 🧠 Concepts Learned

- **Controlled Components** — Setting `value={title}` on an input so React controls its displayed value
- **Two-Way Binding** — Combining `value` (state → UI) + `onChange` (UI → state) for bidirectional data flow
- **Clearing Input After Submit** — Resetting state with `setTitle('')` which automatically clears the input
- **Form Submission with State** — Logging the current state value on form submit

## 📂 File Structure

```
12-two-way-binding/
├── src/
│   ├── App.jsx              # Controlled form input with two-way binding
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

```jsx
const [title, setTitle] = useState('')

const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted By', title);
    setTitle('')  // Clears the input field after submit
}

<input
    type="text"
    value={title}                          // State → UI
    onChange={(e) => setTitle(e.target.value)}  // UI → State
/>
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

Two-way binding creates a **single source of truth** — the state. The input always reflects the state, and the state always reflects the input. This is the foundation of **controlled components** in React.
