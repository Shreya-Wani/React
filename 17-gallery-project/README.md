# 17 - Gallery Project 🖼️

## 📝 What This Covers

A **paginated image gallery** that fetches photos from the **Picsum Photos API** and displays them in a grid. This project combines `useState`, `useEffect`, Axios, and component composition into a real-world mini-app.

## 🧠 Concepts Learned

- **API Integration with `useEffect`** — Fetching data automatically when the page index changes
- **Pagination** — Next/Prev buttons that update the page index, which triggers a new API call
- **Conditional Rendering** — Showing "Loading..." text while data is being fetched
- **Axios for API Calls** — Fetching from `https://picsum.photos/v2/list` with query parameters
- **Component Separation** — Extracting the image Card into a reusable component
- **Dynamic Button Styling** — Disabling the "Prev" button on page 1 using inline `style={{ opacity }}`

## ✨ Features

- ✅ Fetches 12 photos per page from Picsum Photos API
- ✅ Paginated navigation (Prev / Next)
- ✅ Loading state while fetching
- ✅ Each card links to the original image on Unsplash
- ✅ Displays photographer's name

## 📂 File Structure

```
17-gallery-project/
├── src/
│   ├── App.jsx                    # Main app with pagination & API logic
│   ├── components/
│   │   └── Card.jsx               # Image card with author name & link
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**Fetching data when page changes:**
```jsx
const [index, setIndex] = useState(1)

const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
}

useEffect(function () {
    getData()
}, [index])   // Re-fetches when index changes
```

**Card.jsx — Displays image with link:**
```jsx
<a href={props.elem.url} target='_blank'>
    <img src={props.elem.download_url} />
    <h2>{props.elem.author}</h2>
</a>
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

This project demonstrates a **real-world pattern** — using `useEffect` with a dependency to automatically fetch new data when the user navigates between pages.
