# Personal Webpage – Jiří Mlčoušek

This repository contains the source code for my personal website: a hub for sharing projects, reading highlights, inspirations, and ways to connect. The site is intentionally lightweight and built with plain HTML, CSS, and JavaScript so it can be hosted anywhere that serves static files.

## ✨ Features

- **Landing page:** Motivational hero content, social links, and quick navigation to the rest of the site.
- **Books log:** A curated list of books, papers, and study resources with completion dates, kept in `pages/books.html` and showcased with custom styling.
- **Additional sections:** Dedicated pages for about, blog, podcasts, sports, and videos—each ready to be expanded with new content.
- **Shared navigation:** A reusable navbar component (`components/navbar.html`) that is dynamically injected for consistency across pages.


## 🚀 Getting started

You can browse the site by double-clicking `index.html`, but using a local web server ensures relative paths and dynamic includes behave correctly.

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (for running the Live Server dev dependency)

### Install dependencies

```powershell
npm install
```

### Run a local dev server

```powershell
npx live-server . --open=index.html
```

> Tip: If you prefer, the VS Code “Live Server” extension works great—just open the workspace and click **Go Live**.

## 🛠️ Updating content

- **Books:** Edit `pages/books.html` and update images or metadata. Related styles live in `assets/styles/books.css`.
- **Navbar:** Adjust links in `components/navbar.html`; the client-side loader lives in `scripts/main.js`.
- **New sections:** Create additional HTML files under `pages/`, add matching CSS/JS as needed, and link them from the navbar.

Remember to keep asset paths relative to the page location (`data-root` attributes in `<body>` help the scripts locate shared resources).

## 📦 Deployment

Because everything is static, you can deploy to any static host (GitHub Pages, Netlify, Vercel, Azure Static Web Apps, etc.). Build steps aren’t required—just upload the files from the repository root.

Thanks for stopping by — *consistency is key, next stop the top ⬆️⬆️⬆️!*
