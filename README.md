# PejperO Portfolio Website

A modern, customizable portfolio website built with Node.js and React. Easily showcase your projects, manage multilingual content, and extend with new pages or styles.

---

## 🚀 Features
- Custom React implementation (no external frameworks)
- Multilingual support (edit `public/langs.json`)
- Easy project management (edit `public/portfolio.json`)
- Simple global styling with Tailwind CSS
- Modular page and component structure

---

## 📑 Table of Contents
- [Getting Started](#getting-started)
- [Editing Languages](#editing-languages)
- [Adding Projects to Portfolio](#adding-projects-to-portfolio)
- [Global Styles](#global-styles)
- [Adding a New Page](#adding-a-new-page)
- [Contributing](#contributing)
- [License](#license)

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js** v20.12.2
- **npm** v10.9.2

### Install Packages
```bash
npm install
```

### Run in Developer Mode
```bash
npm run dev
```

### Build Project
```bash
npm run build
```
- Output will be in the `dist` directory.

---

## 🌐 Editing Languages
Edit `public/langs.json` to add or update languages. The first language listed is the default.

```json
{
  "en": {
    "title": "Title",
    "description": "Description"
  },
  "pl": {
    "title": "Tytuł",
    "description": "Opis"
  }
}
```

---

## 🖼️ Adding Projects to Portfolio
Edit `public/portfolio.json` to add new projects. Include translations for each language in the same file.

```json
{
  "title": "Chess App with Local Network Play",
  "img": "public/assets/projects/Chess2D.png",
  "subtitle": "Project for Engineering Degree (B.Eng.)",
  "overview": [
    "This project focuses on developing a chess application in Java with a graphical interface..."
  ],
  "features": []
}
```

---

## 🎨 Global Styles
Edit `src/app/global.css` to add or modify global styles.

---

## 📄 Adding a New Page
1. Create a new file or folder in `src/app` (e.g., `src/app/About/index.tsx`).
2. Example page component:

```tsx
import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```

3. Add a route in `src/app/root.tsx`:
```tsx
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import About from "./About";

<BrowserRouter>
  <Router src="/" component={<Home />} default />
  <Router src="/contact" component={<Contact />} />
  <Router src="/portfolio" component={<Portfolio />} />
  <Router src="/about" component={<About />} />
</BrowserRouter>
```

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.