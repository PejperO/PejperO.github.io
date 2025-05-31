# PejperO Portfolio Website

A modern, customizable portfolio website built with Node.js and **ft_react** (a custom React-like library). Easily showcase your projects, manage multilingual content, and extend with new pages or styles.

> 🔧 Built entirely using [ft_react](https://github.com/Emsa001/ft_react) — a custom React-like JavaScript library.
---

## 🚀 Features
- Custom React implementation via [ft_react](https://github.com/Emsa001/ft_react) (no external frameworks)
- Multilingual support (edit `public/langs.json`)
- Easy project management (edit `public/portfolio.json`)
- Simple global styling with Tailwind CSS
- Modular page and component structure

---

## 📑 Table of Contents
- [Getting Started](#getting-started)
- [Development & Build Guide](#development-&-build-guide)
- [Editing Languages](#editing-languages)
- [Adding Projects to Portfolio](#adding-projects-to-portfolio)
- [Global Styles](#global-styles)
- [Adding a New Page](#adding-a-new-page)
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

## 🚀 Development & Build Guide

### Run in Developer Mode
You can either:

- Use the provided script:
`./DevMode.sh`
>This script builds a Docker image and starts the development server (`npm run dev`) inside a Docker container.

- Or run manually without Docker:
```bash
npm run dev
```

### Build the Project

You can either:
- Use the build script:
`./Build.sh`
>This script builds a Docker image, runs the production build (`npm run build`) inside a container, and then copies the `dist/` directory from the container to your host machine.

- Or build manually without Docker:
```bash
npm run build
```

- The final output will be available in the `dist` directory.

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
  "img": "/public/assets/projects/Chess2D.png",
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
