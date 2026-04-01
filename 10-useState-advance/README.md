# 10 - useState Advanced ⚙️

## 📝 What This Covers

This project dives deeper into `useState` with **advanced patterns** — updating objects, updating arrays, and understanding React's **batch update mechanism** with functional updaters.

## 🧠 Concepts Learned

### 1. Updating State with Objects
- Using the **spread operator (`...`)** to copy an object before modifying it
- Never mutate state directly — always create a new copy

```jsx
const [num, setNum] = useState({ user: "Shreya", age: 20 })
const newNum = { ...num };
newNum.user = 'shivam';
setNum(newNum);
```

### 2. Updating State with Arrays
- Spreading the array to create a copy before pushing new items

```jsx
const [num, setNum] = useState([10, 20, 30])
const newNum = [...num];
newNum.push(40);
setNum(newNum);
```

### 3. Batch Updates with Functional Updater (Active Code)
- When calling `setNum` multiple times, React **batches** the updates for performance
- Using the **functional form** `setNum(prev => prev + 1)` ensures each update reads the latest state

```jsx
const btnClicked = () => {
    setNum(prev => (prev + 1));  // 11
    setNum(prev => (prev + 1));  // 12
    setNum(prev => (prev + 1));  // 13 — increments by 3 total!
}
```

## 📂 File Structure

```
10-useState-advance/
├── src/
│   ├── App.jsx              # Demonstrates object, array & batch state updates
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

Always **create a copy** of objects/arrays before updating state (immutability). Use the **functional updater** `setState(prev => ...)` when the new state depends on the previous state, especially for batch updates.
