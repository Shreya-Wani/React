# 15 - API Calling 🌐

## 📝 What This Covers

This project teaches how to make **HTTP API calls** in React using both the native `fetch` API and the **Axios** library, then display the response data dynamically.

## 🧠 Concepts Learned

### Using `fetch` (Commented-Out Examples)
- **`fetch()` with `async/await`** — Making GET requests to a REST API
- **`.json()` method** — Parsing the response (which is also asynchronous and requires `await`)

### Using Axios (Active Code)
- **`axios.get()`** — Cleaner API calls with automatic JSON parsing
- **Destructuring the response** — `const { data } = await axios.get(url)`
- **Storing API data in state** — Using `useState` to hold the fetched data
- **Rendering API data** — Mapping over the data array to display user names

## 📂 File Structure

```
15-api-calling/
├── src/
│   ├── App.jsx              # Fetches users from JSONPlaceholder API
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**Fetching data with Axios:**
```jsx
const [data, setData] = useState([])

const getData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    setData(data)
}
```

**Rendering the fetched data:**
```jsx
<button onClick={getData}>Get Data</button>
{data.map(function(elem, idx) {
    return <h3>Hello, {elem.name} {idx}</h3>
})}
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

**Axios** simplifies API calls compared to `fetch` — it auto-parses JSON and provides cleaner syntax. Combine API calls with `useState` to store and render dynamic data from external sources.
