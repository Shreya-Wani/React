# 04 - Cards Project (Lists & Keys) 🃏

## 📝 What This Covers

A **Job Board UI** built to learn how to render lists of data dynamically using `.map()` and the `key` prop in React.

## 🧠 Concepts Learned

- **Rendering Lists with `.map()`** — Iterating over an array of objects to dynamically generate Card components
- **The `key` Prop** — Providing a unique identifier for each list item to help React optimize re-renders
- **Array of Objects as Data Source** — Defining structured data (job openings) and passing individual fields as props
- **Props Destructuring** — Passing multiple props (`company`, `brandLogo`, `post`, `pay`, etc.) to a child component

## 📂 File Structure

```
04-cards-project/
├── src/
│   ├── App.jsx                    # Defines job data array & maps over it
│   ├── comonents/
│   │   └── Card.jsx               # Displays individual job card with props
│   ├── main.jsx
│   └── index.css                  # Card UI styling
└── ...
```

## 🔍 Code Highlights

**App.jsx** — Array of 10 job openings (Meta, Amazon, Apple, Netflix, Google, Microsoft, IBM, Tesla, NVIDIA, Oracle) rendered using `.map()`:
```jsx
{jobOpenings.map(function(elem, idx) {
    return <Card key={idx} company={elem.companyName} post={elem.post} pay={elem.pay} ... />;
})}
```

**Card.jsx** — Displays company logo, job title, tags (Full Time / Junior Level), pay rate, and location with an "Apply Now" button.

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 💡 Key Takeaway

When rendering lists in React, always use `.map()` with a `key` prop. This pattern is fundamental for building dynamic, data-driven UIs.
