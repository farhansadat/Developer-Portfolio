# 🚀 Developer Portfolio

A sleek, modern, and fully responsive portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. This portfolio doesn’t just look good—it’s smart too. It dynamically fetches your GitHub repositories, adapts to dark and light modes, and features smooth, delightful animations.

---

## ✨ Features

- 🎨 **Modern UI:** Clean, elegant design with subtle glassmorphism effects.
- 🔗 **GitHub Integration:** Automatically fetches and displays your public repositories.
- 📱 **Fully Responsive:** Looks great on desktops, tablets, and mobile devices.
- 🌗 **Dark & Light Mode:** Toggle manually or sync with system preferences.
- 🎥 **Smooth Animations:** Powered by Framer Motion for buttery-smooth transitions.
- 📬 **Functional Contact Form:** Email integration to stay connected.
- 🚀 **SEO Optimized:** Built with best practices for visibility and performance.

---

## 🛠️ Tech Stack

| Category     | Tools                            |
|---------------|-----------------------------------|
| **Frontend**  | React 18, TypeScript, Vite        |
| **Styling**   | Tailwind CSS, Radix UI            |
| **Animations**| Framer Motion                     |
| **Data Fetching** | React Query                   |
| **Routing**   | Wouter                            |
| **Deployment**| Netlify                           |

---

## 🚀 Getting Started

### ✅ Prerequisites

- **Node.js** version 20 or higher
- **npm**, **pnpm**, or **yarn**

### ⚙️ Installation

1. **Clone the repository:**
\`\`\`bash
git clone https://github.com/farhansadat/Developer-Portfolio.git
cd Developer-Portfolio
\`\`\`

2. **Install dependencies:**
\`\`\`bash
npm install
\`\`\`

3. **Start the development server:**
\`\`\`bash
npm run dev
\`\`\`

4. **Open your browser:**  
Visit [http://localhost:5000](http://localhost:5000)

---

## 🔧 Configuration

### 🔗 GitHub Integration
Customize your GitHub info in \`client/src/config/github.ts\`:
\`\`\`ts
export const GITHUB_CONFIG = {
  username: 'your-github-username',
  excludeRepos: ['repo-to-exclude'],
  featuredRepos: ['featured-repo-name'],
};
\`\`\`

### 👤 Personal Info
Update your personal details in:
- \`client/src/data/skills.ts\` — Skills, certifications, and experience
- \`client/src/components/Hero.tsx\` — Hero section (landing headline)
- \`client/src/components/About.tsx\` — About section content

---

## 🚀 Deployment

### ⚡ Deploying to Netlify

1. Build the project:
\`\`\`bash
npm run build:netlify
\`\`\`
2. Deploy on Netlify:
- Connect your GitHub repo.
- **Build command:** \`npm run build:netlify\`
- **Publish directory:** \`dist/public\`

### 🌍 Manual Deployment

1. Build for production:
\`\`\`bash
npm run build
\`\`\`
2. Upload the contents of \`dist/public\` to your hosting provider.

---

## 🗂️ Project Structure
\`\`\`
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── data/            # Static data (skills, projects, etc.)
│   │   ├── lib/             # Utility functions
│   │   └── types/           # TypeScript types
├── server/                  # Development server (for local dev)
├── attached_assets/         # Images, icons, and media
└── dist/                    # Production build output
\`\`\`

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Alimullah Sadat**  
- 🌐 [GitHub](https://github.com/farhansadat)
