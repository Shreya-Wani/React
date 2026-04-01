# 03 - Props 📨

## 📝 What This Covers

This project demonstrates **props (properties)** — the mechanism for passing data from a parent component to a child component in React.

## 🧠 Concepts Learned

- **Props** — Passing data (`user`, `age`, `img`) from parent to child components
- **Dynamic Rendering** — Using props to render different content for each component instance
- **Reusable Components** — Creating a single `Card` component that displays different data based on the props it receives
- **Accessing Props** — Reading values via `props.user`, `props.age`, `props.img`

## 📂 File Structure

```
03-props/
├── src/
│   ├── App.jsx                    # Renders two Card components with different props
│   ├── components/
│   │   └── Cards.jsx              # Receives props and displays user info
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**App.jsx** — Passes different props to each Card instance:
```jsx
<Card user='Shreya Wani' age={19} img='...' />
<Card user='Shivam Patel' age={21} img='...' />
```

**Cards.jsx** — Receives and renders the props:
```jsx
const Cards = (props) => {
    return (
        <div className="card">
            <img src={props.img} />
            <h1>{props.user}, {props.age}</h1>
        </div>
    )
}
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

Props allow components to be **reusable and dynamic**. Instead of hardcoding data, you pass it from the parent — making the same component render differently each time.
