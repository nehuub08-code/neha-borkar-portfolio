# Neha Borkar — Professional Engineering Portfolio

A modern, data-driven, and recruiter-focused engineering portfolio website built for **Neha Borkar** (Second-Year B.Tech in Computer Engineering, DY Patil College of Engineering and Innovation, Varale / SPPU Autonomous).

Designed strictly with a **Premium Professional Light Theme** emphasizing clean typography, high readability, semantic accessibility, and verified engineering facts.

---

## 🌟 Highlights & Core Features

- **Strict Premium Light Theme**: Carefully chosen corporate-grade palette (`#FFFFFF`, `#F7F9FC`, `#172033`, `#64748B`, `#2563EB`, `#0EA5E9`, `#E2E8F0`).
- **Data-Driven Architecture**: All portfolio information (profile, academic metrics, skills, education milestones, featured projects, certifications, and contact channels) is centralized in `data/portfolio-data.js` for effortless updates without touching UI markup.
- **Academic Distinction Cards**: Prominently separates and displays verified academic achievements:
  - **First Semester SGPA**: `9.5 / 10.0`
  - **First Year CGPA**: `9.16 / 10.0`
- **Featured Flagship Projects**:
  1. **Q-CORE**: Quantum vs. Classical Microprocessor Educational Experience (React 19, Vite, Three.js WebGL, Tailwind v4).
  2. **WhatsAI**: Full-Stack AI WhatsApp Assistant SaaS (FastAPI, Google Gemini 2.5 Flash API, Meta WhatsApp Cloud API, React 18, SQLAlchemy, JWT, SQLite/PostgreSQL).
- **Interactive Project Modal**: Deep-dive architectural breakdown, problem statement, engineering solution, key features, and live application links.
- **GitHub REST API Integration**: Dynamically loads real-time repository stars, forks, and primary languages with intelligent local caching and graceful fallback.
- **Dynamic Achievements & Certifications Sections**: Independent sections featuring dynamic architecture with elegant empty states ready for future accredited records.
- **Functional WhatsApp Deep-Linking**: Internationalized click-to-chat integration (+91 9529604668) with URL-encoded prefilled message.
- **Netlify Forms Integration**: Built-in `data-netlify="true"` contact form with client-side validation, status feedback, and automatic mailto fallback.
- **NIVA AI Portfolio Assistant**: Lightweight, responsive chatbot grounded strictly in verified portfolio data, featuring quick suggestion chips and deep navigation links.

---

## 📂 Project Structure

```
neha-borkar-portfolio/
├── index.html                   # Semantic HTML5 single-page application
├── data/
│   └── portfolio-data.js        # Centralized data source of truth
├── css/
│   ├── style.css                # Premium light theme design system
│   └── chatbot.css              # NIVA AI Assistant styling
├── js/
│   ├── main.js                  # Navigation, typing animation & section renderers
│   ├── projects.js              # Projects showcase & interactive modal controller
│   ├── chatbot.js               # Portfolio-aware NIVA chatbot engine
│   ├── contact.js               # Contact form handler & WhatsApp integration
│   └── github-service.js        # GitHub REST API client with local cache
├── assets/
│   └── neha_profile.png         # Verified profile photograph of Neha Borkar
├── favicon.ico                  # Site favicon
├── netlify.toml                 # Netlify build and security headers configuration
├── _redirects                   # Netlify SPA clean URL redirects
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # SEO search engine sitemap
└── README.md                    # Project documentation
```

---

## 🚀 Local Development

To run and preview the portfolio locally:

### Using Python:
```bash
# Navigate to the project directory
cd neha-borkar-portfolio

# Start a local web server
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in any modern web browser.

### Using Node.js (Optional):
```bash
npx serve .
```

---

## 🌐 Netlify Deployment Guide

The portfolio is pre-configured for instant zero-configuration deployment on **Netlify**:

### Method 1: Git-Connected Deployment (Recommended)
1. Push this directory to your GitHub repository (e.g., `https://github.com/nehuub08-code/portfolio`).
2. Log into your [Netlify Dashboard](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project** > **GitHub**.
4. Select your repository.
5. Set:
   - **Build command**: *(leave blank)*
   - **Publish directory**: `.` (or the project root)
6. Click **Deploy Site**.

### Method 2: Netlify CLI / Manual Drag-and-Drop
1. Drag and drop the `neha-borkar-portfolio` folder directly into the Netlify "Deploys" tab.
2. The site will be live instantly with SSL and custom domain support.

---

## 🛠️ How to Add Future Semesters, Projects, or Certifications

All updates are made cleanly inside `data/portfolio-data.js`:

### To update Academic Results:
Edit `PORTFOLIO_DATA.academicResults` in `data/portfolio-data.js`.

### To add a New Project:
Add an object to the `PORTFOLIO_DATA.projects` array:
```javascript
{
  id: "project-id",
  title: "Project Name",
  subtitle: "Tagline",
  category: "Full-Stack",
  status: "Completed",
  repoUrl: "https://github.com/nehuub08-code/...",
  liveUrl: "https://...",
  technologies: ["FastAPI", "React"],
  shortDescription: "...",
  overview: "...",
  problemStatement: "...",
  solution: "...",
  keyFeatures: ["Feature 1", "Feature 2"],
  academicCredits: "..."
}
```

### To add a Verified Certificate:
Add a record to `PORTFOLIO_DATA.certificates.records`:
```javascript
{
  title: "Course or Certification Name",
  issuer: "Issuing Organization / NPTEL",
  issueDate: "Month Year",
  credentialId: "CERT-12345",
  verifyUrl: "https://...",
  category: "AI & ML"
}
```
The UI will automatically switch from the empty state to displaying rich certificate cards!

---

## 📜 Academic Attribution & License

- **Student Author**: Neha Borkar
- **Institution**: Department of Computer Engineering, Dr. D. Y. Patil College of Engineering and Innovation, Varale (Talegaon, Pune)
- **Affiliation**: Savitribai Phule Pune University (Autonomous Institute)
- **Portfolio Repository**: [https://github.com/nehuub08-code](https://github.com/nehuub08-code)
- **License**: MIT License

