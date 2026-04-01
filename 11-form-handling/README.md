# 11 - Form Handling 📋

## 📝 What This Covers

This project teaches **form handling** in React — how to intercept form submissions and prevent the default browser behavior using `e.preventDefault()`.

## 🧠 Concepts Learned

- **`onSubmit` Event** — Handling form submissions in React
- **`e.preventDefault()`** — Preventing the default page reload that browsers do on form submit
- **Event Handler Functions** — Defining a `submitHandler` function and passing it to the form
- **Inline Event Handlers** — Using an inline arrow function to call the handler with the event object

## 📂 File Structure

```
11-form-handling/
├── src/
│   ├── App.jsx              # Form with submit handler
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

```jsx
const submitHandler = (e) => {
    e.preventDefault();           // Prevents page reload
    console.log('Form Submitted');
}

<form onSubmit={(e) => submitHandler(e)}>
    <input type="text" placeholder='Enter Your Name' />
    <button>Submit</button>
</form>
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

In React, `e.preventDefault()` is essential for **form handling** — without it, the browser will reload the page on submit, losing all React state.
