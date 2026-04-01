# 08 - Event Handling & Functions ⚡

## 📝 What This Covers

This project covers **event handling** in React — how to respond to user interactions like clicks, mouse events, and input changes using event handler functions.

## 🧠 Concepts Learned

- **`onClick` Event** — Running a function when a button is clicked
- **`onMouseEnter` / `onMouseLeave`** — Detecting when the mouse hovers over or leaves an element
- **`onChange` Event** — Capturing input field changes in real-time
- **Event Object (`e`)** — Accessing `event.target.value` to read the current input value
- **Inline vs Named Handlers** — Defining handlers as separate functions or inline anonymous functions

## 📂 File Structure

```
08-functions/
├── src/
│   ├── App.jsx              # Input field with onChange handler
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**Active Code** — Input field with `onChange` event:
```jsx
function inputChanging(val) {
    console.log(val)
}

<input
    onChange={function(elem) {
        inputChanging(elem.target.value);
    }}
    type="text"
    placeholder="Enter Name"
/>
```

**Commented-Out Examples** — Click and mouse event handlers:
```jsx
// onClick={btnClicked}
// onMouseEnter={mouseEnter}
// onMouseLeave={mouseLeave}
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

React uses **camelCase event names** (like `onClick`, `onChange`) and passes functions as event handlers. The event object gives access to details about the interaction.
