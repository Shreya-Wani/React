# 16 - useEffect Hook 🔁

## 📝 What This Covers

This project introduces the **`useEffect` hook** — React's way of running **side effects** in response to state or prop changes. It demonstrates dependency arrays and independent effect tracking.

## 🧠 Concepts Learned

- **`useEffect` Hook** — Running code in response to component lifecycle events
- **Dependency Array** — The second argument `[a]` tells React to re-run the effect **only when `a` changes**
- **Multiple useEffects** — Having separate `useEffect` calls for different state variables, each with its own dependency
- **Side Effects** — Actions like logging, API calls, or DOM manipulation that happen after render

## 📂 File Structure

```
16-useEffect/
├── src/
│   ├── App.jsx              # Two independent useEffect hooks tracking different states
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

```jsx
const [a, setA] = useState(0);
const [b, setB] = useState(0);

// Runs only when 'a' changes
useEffect(function () {
    changeA()
}, [a]);

// Runs only when 'b' changes
useEffect(function () {
    changeB()
}, [b]);
```

**Two buttons that update different state variables:**
```jsx
<button onClick={() => setA(a + 1)}>Change A</button>
<button onClick={() => setB(b + 1)}>Change B</button>
```

## 📌 Dependency Array Behavior

| Dependency Array | When It Runs |
|---|---|
| `[]` (empty) | Only once, on initial mount |
| `[a]` | On mount + every time `a` changes |
| `[a, b]` | On mount + every time `a` or `b` changes |
| None (omitted) | After every single render |

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

`useEffect` lets you **synchronize your component with external systems** (APIs, DOM, timers). The dependency array gives you fine-grained control over **when** the effect runs.
