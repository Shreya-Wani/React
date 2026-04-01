# 09 - useState Hook 🔄

## 📝 What This Covers

This project introduces the **`useState` hook** — React's primary way of managing state in functional components. It demonstrates how state changes trigger re-renders to update the UI.

## 🧠 Concepts Learned

- **`useState` Hook** — Declaring reactive state variables with `const [num, setNum] = useState(10)`
- **State Updater Functions** — Using `setNum()` to update state and trigger a re-render
- **Why Regular Variables Don't Work** — Commented-out code shows that normal `let` variables don't cause re-renders
- **Multiple Actions on State** — Increment (+1), Decrement (-1), and Increment by 5 (+5) operations
- **Re-rendering** — Understanding that the UI automatically updates when state changes

## 📂 File Structure

```
09-useState/
├── src/
│   ├── App.jsx              # Counter with increment/decrement using useState
│   ├── main.jsx
│   └── index.css            # Styled counter UI
└── ...
```

## 🔍 Code Highlights

**Counter with useState:**
```jsx
const [num, setNum] = useState(10);

function increment() {
    setNum(num + 1);
}

function decrement() {
    setNum(num - 1);
}

function incrementBy5() {
    setNum(num + 5);
}
```

**UI with three action buttons:**
```jsx
<h1 className='box'>{num}</h1>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={incrementBy5}>Increment by 5</button>
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

`useState` is the most fundamental React hook. It makes your UI **reactive** — when state changes, the component re-renders automatically to reflect the new data.
