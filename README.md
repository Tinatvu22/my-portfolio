# Tina's Portfolio

A personal portfolio website built with React, showcasing my projects, and skills.

<!-- ![Portfolio Preview](image) ![License](image) -->

## ✨ Features

- **Desktop App Aesthetic** - Browser based window UI with sidebar navigation and title bar
- **Responsive Design** - Seamlessly adapts to desktop and mobile devices
- **Contact Form** - EmailJS integration for direct messaging with auto-reply
- **Project Showcase** - Display of featured work with category filters
- **FAQ Section** - Accordion-style answers to common questions
- **Links Page** - Resume download, GitHub, and LinkedIn links
- **Smooth Animations** - Typing animation on home page with replay button
- **Status Badge** - Current availability and location info

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript, CSS3
- **Email Service:** EmailJS
- **Design Tool:** Figma
- **Hosting:** [Add when deployed]

## 📂 Project Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.css
│   ├── Sidebar/
│   │   ├── Sidebar.js
│   │   └── Sidebar.css
│   ├── Footer/
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   └── HomeFooter/
│   │       ├── HomeFooter.js
│   │       └── HomeFooter.css
│   └── WindowControls/
│       ├── WindowControls.js
│       └── WindowControls.css
├── pages/
│   ├── Home.js
│   ├── Home.css
│   ├── About.js
│   ├── About.css
│   ├── Projects.js
│   ├── Projects.css
│   ├── Links.js
│   ├── Links.css
│   ├── FAQ.js
│   ├── FAQ.css
│   ├── Contact.js
│   └── Contact.css
├── App.js
├── App.css
├── index.js
└── index.css

public/
├── sidebar/ (navigation icons & avatar)
├── header-window/ (logo, minimize, maximize, close)
├── footer/ (trash, settings, theme)
├── links/ (social media icons)
└── Tina_s_Resume.pdf
```

## 🚀 Getting Started

### Prerequisites
- Node.js 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Tinatvu22/my-portfolio.git

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm start run
```

## 📧 Email Setup (Contact Form)

To enable the contact form with auto-reply:

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up Email Service
3. Create two email templates:
   - **Template 1:** Contact us (to your inbox)
   - **Template 2:** Auto-reply (to sender)
4. Update credentials in `src/pages/Contact.js`:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```
5. Update template IDs in the `handleSubmit` function

## 📄 Pages Overview

| Page | Purpose |
|------|---------|
| **Home** | Introduction, featured project, status, and current learning |
| **About** | Background, skills & tools, fun facts |
| **Projects** | Filterable project gallery |
| **Links** | Resume download, GitHub, and LinkedIn links |
| **FAQ** | Common questions about me and my work |
| **Contact** | Direct contact form with auto-reply |

## 🎨 Design

Built from Figma design with attention to detail:
- **Color Palette:** Cream (#F8F0E6) & Burgundy (#633344)
- **Typography:** System fonts for performance
- **Layout:** Grid-based responsive design
- **Icons:** PNG assets

## 🔄 Git Workflow

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Feature: add contact form functionality"

# Push to GitHub
git push origin main
```

## 🚀 Deployment

### GitHub Pages
```bash
npm start run
# Follow GitHub Pages setup in repository settings
```

<!-- ### Netlify
```bash
# Connect repository to Netlify
# Auto-deploys on push to main
``` -->

## 📋 To-Do

- [ ] Deploy to production
- [ ] Implement dark/light mode full functionality
- [ ] Add more projects
- [ ] Implement smaller functionality
- [ ] Fill in more info to profile

## 👋 Connect With Me

- **Email:** [Tinatvu04@gmail.com](mailto:Tinatvu04@gmail.com)
- **LinkedIn:** [linkedin.com/in/tina-t-vu](https://linkedin.com/in/tina-t-vu)
- **GitHub:** [github.com/Tinatvu22](https://github.com/Tinatvu22)
- **Location:** Houston, TX · Central Time (CST)

---

Made by Tina Vu | Currently open to opportunities