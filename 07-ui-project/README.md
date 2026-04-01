# 07 - UI Project (Full Page) 🖥️

## 📝 What This Covers

A complete **multi-component UI page** resembling a digital banking platform landing page. This project combines everything learned so far — components, props, Tailwind CSS, and external icon libraries.

## 🧠 Concepts Learned

- **Multi-Component Architecture** — Breaking a full page into Navbar, Hero, Left/Right content sections, and Cards
- **Prop Drilling** — Passing user data through nested component layers (`App → Section1 → Page1Content → RightContent → RightCard`)
- **Tailwind CSS Styling** — Extensive use of Tailwind for layout, typography, colors, and responsive design
- **Lucide React Icons** — Using the `ArrowRight` icon from the lucide-react library
- **Dynamic Card Rendering** — Mapping over a users array to render cards with images, tags, and color-coded buttons
- **Component Organization** — All Section1 sub-components organized in a dedicated folder

## 📂 File Structure

```
07-ui-project/
├── src/
│   ├── App.jsx                                  # Defines user data & renders Section1
│   ├── components/
│   │   └── Section1/
│   │       ├── Section1.jsx                     # Composes Navbar + Page1Content
│   │       ├── Navbar.jsx                       # Top bar with brand name & CTA
│   │       ├── Page1Content.jsx                 # Left + Right layout
│   │       ├── LeftContent.jsx                  # Hero text section
│   │       ├── HeroText.jsx                     # Large headline text
│   │       ├── Arrow.jsx                        # Decorative arrow element
│   │       ├── RightContent.jsx                 # Card grid section
│   │       ├── RightCrad.jsx                    # Individual card wrapper
│   │       └── RightCardContent.jsx             # Card overlay with tag & arrow icon
│   ├── main.jsx
│   └── index.css
└── ...
```

## 🔍 Code Highlights

**App.jsx** — User data with images, colors, and tags:
```jsx
const users = [
    { img: '...', color: 'bg-pink-500', tag: 'Satisfied' },
    { img: '...', color: 'bg-purple-600', tag: 'underserved' },
    // ...
]
```

**RightCardContent.jsx** — Dynamic card overlay with Lucide icons:
```jsx
<button className={`${props.color} text-white font-medium py-2 px-7 rounded-full`}>
    {props.tag}
</button>
<button><ArrowRight /></button>
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

This project teaches how to **architect a real-world UI** by decomposing it into many small components and passing data down through props.
