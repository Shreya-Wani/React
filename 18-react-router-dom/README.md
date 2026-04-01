# 18 - React Router DOM 🧭

## 📝 What This Covers

This project introduces **client-side routing** using `react-router-dom` — enabling navigation between multiple pages **without full page reloads**.

## 🧠 Concepts Learned

- **`BrowserRouter`** — Wrapping the app to enable routing (set up in `main.jsx`)
- **`Routes` & `Route`** — Defining URL paths and mapping them to page components
- **`Link` Component** — Navigation without page reload (replaces `<a>` tags)
- **Multi-Page Architecture** — Organizing pages into a `pages/` directory
- **Navbar Component** — A persistent navigation bar that appears on all pages

## 📂 File Structure

```
18-react-router-dom/
├── src/
│   ├── App.jsx                    # Route definitions
│   ├── components/
│   │   └── Navbar.jsx             # Navigation links using <Link>
│   ├── pages/
│   │   ├── Home.jsx               # Home page
│   │   ├── About.jsx              # About page
│   │   ├── Contact.jsx            # Contact page
│   │   ├── Product.jsx            # Product page
│   │   └── Service.jsx            # Service page
│   ├── main.jsx                   # Wraps App in <BrowserRouter>
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**main.jsx** — Setting up BrowserRouter:
```jsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
```

**App.jsx** — Route definitions:
```jsx
<Navbar />
<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/product' element={<Product />} />
    <Route path='/service' element={<Service />} />
</Routes>
```

**Navbar.jsx** — Navigation with `<Link>`:
```jsx
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

`react-router-dom` enables **SPA (Single Page Application)** routing — the page content changes based on the URL, but the browser **never fully reloads**. Use `<Link>` instead of `<a>` to avoid page refreshes.
