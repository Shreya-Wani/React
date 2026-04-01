# 19 - Routing Advanced 🚀

## 📝 What This Covers

This project builds on the previous routing lesson with an **advanced routing setup** — featuring a persistent layout with Navbar and Footer, separate page components, and `BrowserRouter` integration with Tailwind CSS styling.

## 🧠 Concepts Learned

- **Layout Components** — Navbar and Footer that persist across all routes
- **Page Components** — Separate page components (Home, About, Product) in a `pages/` directory
- **BrowserRouter Setup** — Wrapping the app in `<BrowserRouter>` in `main.jsx`
- **Anchor-Based Navigation** — Using standard `<a>` tags with `href` for navigation (demonstrating the difference from `<Link>`)
- **Tailwind CSS Layout** — Full-screen dark layout with flexbox-based navbar and fixed-position footer

## 📂 File Structure

```
19-routing-advanced/
├── src/
│   ├── App.jsx                    # Renders Navbar + Footer
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar with <a> links
│   │   └── Footer.jsx             # Fixed-position footer
│   ├── pages/
│   │   ├── Home.jsx               # Home page component
│   │   ├── About.jsx              # About page component
│   │   └── Product.jsx            # Product page component
│   ├── main.jsx                   # Wraps App in <BrowserRouter>
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**Navbar.jsx** — Navigation with Tailwind styling:
```jsx
<div className='flex py-4 px-8 bg-gray-700 items-center justify-between'>
    <h2 className='text-xl font-bold'>Shreyaa</h2>
    <div className='flex gap-10'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </div>
</div>
```

**Footer.jsx** — Fixed footer:
```jsx
<div className='absolute bottom-0 bg-gray-700 w-full flex items-center justify-center py-3'>
    <h3>This is Footer</h3>
</div>
```

**App.jsx** — Layout composition:
```jsx
<div className='h-screen bg-black text-white'>
    <Navbar />
    <Footer />
</div>
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

This project demonstrates how to set up a **persistent layout** with shared Navbar and Footer components. It also highlights the difference between using `<a>` tags (which cause full page reloads) vs `<Link>` from react-router-dom (which enables SPA navigation).
