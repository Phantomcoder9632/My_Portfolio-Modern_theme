<div align="center">
  <img src="./public/phantom_ai_logo.png" alt="Phantom.AI Logo" width="120" />
  <h1>Phantom.AI | Developer & Researcher Portfolio</h1>
  <p><strong>A premium, modern portfolio built with Next.js App Router and Glassmorphism design.</strong></p>
  
  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3" alt="CSS" /></a>
    <a href="https://formsubmit.co"><img src="https://img.shields.io/badge/Backend-FormSubmit-4ADE80?style=for-the-badge" alt="FormSubmit" /></a>
  </p>
</div>

---

## 🌌 Overview

Welcome to my personal portfolio repository! This project serves as a showcase of my work spanning **AI/ML Engineering, Software Development, Agentic RAG, Data Analysis, and Academic Research**. 

Designed with a "Luminous Precision" aesthetic, the site completely avoids utility-class clutter (no Tailwind) in favor of **pure, robust CSS variables and modular inline styling**, achieving maximum performance and a premium glassmorphic feel.

### ✨ Key Features

- **Luminous Glassmorphism UI:** Deep cobalt-to-violet gradients, soft blurs, and premium depth effects.
- **Pure CSS Animations:** Infinite-looping "Tech Constellation" on the homepage hero, pulsing badges, and hover reveals—built entirely without JavaScript overhead.
- **Zero-Server Contact Form:** Integrated with [FormSubmit.co](https://formsubmit.co) AJAX endpoint for instant email delivery directly to my inbox with built-in spam honeypots.
- **Responsive Architecture:** Pixel-perfect fluid layouts across Desktop, Tablet, and Mobile.
- **Next.js App Router (Server Components):** Lightning-fast page loads and SEO-optimized static rendering.

---

## 🚀 Getting Started

To run this portfolio locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/Phantomcoder9632/My_Portfolio-Modern_theme.git
cd My_Portfolio-Modern_theme
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

A quick guide on where everything lives so you can easily modify the code:

```text
📂 portfolio/
├── 📂 public/               # Static assets (PDFs, Images, Logo)
│   ├── phantom_ai_logo.png
│   └── Bikram_Hawladar_image.jpg
│
├── 📂 src/
│   ├── 📂 app/              # Next.js App Router pages
│   │   ├── page.tsx         # 🏠 Home Page (Hero, Stats, About Me)
│   │   ├── projects/        # 🚀 Projects portfolio
│   │   ├── experience/      # 💼 Work & Research Experience
│   │   ├── skills/          # ⚙️ Technical Skills Grid
│   │   ├── contact/         # 📬 Contact Form & Details
│   │   ├── layout.tsx       # Root layout & global metadata
│   │   └── globals.css      # 🎨 Core Design System (Variables, Utilities, Keyframes)
│   │
│   └── 📂 components/       # Reusable React components
│       ├── Navbar.tsx       # Top navigation (responsive)
│       ├── Footer.tsx       # Site footer
│       ├── ProjectCard.tsx  # Interactive project display block
│       ├── ScrollReveal.tsx # Intersection Observer scroll animations
│       └── HoverCard.tsx    # Interactive UI wrappers
```

---

## 🛠️ How to Customize & Extend

If you are using this template or want to update the content:

### 🎨 1. Global Theming
All core colors, fonts, and spacing variables live at the top of `src/app/globals.css`. 
To change the primary color scheme, edit these CSS variables:
```css
:root {
  --primary: #0023af;       /* Main Brand Color */
  --secondary: #6a45c4;     /* Accent Color */
  --font-heading: 'Outfit', sans-serif;
}
```

### 📄 2. Adding New Projects
Navigate to `src/app/projects/page.tsx`. Locate the `projects` array and simply append a new object:
```javascript
{
  title: "New Amazing Project",
  type: "AI / ML",
  desc: "A brief description of what you built.",
  tech: ["Python", "PyTorch", "Next.js"],
  github: "https://github.com/...",
  demo: "https://demo...",
}
```

### ✉️ 3. Modifying the Contact Form
The contact page (`src/app/contact/page.tsx`) uses a serverless fetch request to `formsubmit.co`. 

> ⚠️ **CRITICAL NOTE ON FORM ACTIVATION:**
> The first time you submit a message through the contact form, FormSubmit will send an **Activation Email** to the target address (`connect.bikram9632@gmail.com`). 
> **You MUST click "Activate" in that email for future messages to be delivered!**

---

## 📈 Deployment

This project is perfectly optimized for **Vercel** or **GitHub Pages**.

### Deploying to Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Leave all build settings as default (`npm run build`).
5. Click **Deploy**.

---

<div align="center">
  <p>Built with ❤️ by <strong>Bikram Hawladar</strong></p>
  <p>
    <a href="https://github.com/Phantomcoder9632">GitHub</a> • 
    <a href="https://www.linkedin.com/in/bikram-hawladar-2742092b1/">LinkedIn</a>
  </p>
</div>
