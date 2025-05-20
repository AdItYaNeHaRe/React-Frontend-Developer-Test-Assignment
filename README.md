# 📊 React Dashboard UI (Vite + Tailwind + shadcn/ui)

A responsive and modern admin dashboard built using **React**, **Vite**, **Tailwind CSS**, and **shadcn/ui**, featuring:
- Sidebar navigation
- Article management table
- Interactive charts using Recharts
- Search functionality
- Tabbed views
- WordPress-style publish icon

## 🔧 Technologies Used

- ⚛️ React 18 (with TypeScript)
- ⚡ Vite for blazing-fast development
- 💨 Tailwind CSS for utility-first styling
- 🧱 shadcn/ui components (accessible & elegant UI blocks)
- 📊 Recharts for interactive charting
- 🎨 Framer Motion for animations
- 🧩 React Icons (WordPress icon and more)

---

## 📁 Folder Structure
dashboard-ui/
├── public/
├── src/
│ ├── components/
│ │ ├── sidebar.tsx
│ │ ├── dashboard-table.tsx
│ │ └── charts/
│ │ └── ArticleWordsChart.tsx
│ ├── pages/
│ │ ├── Dashboard.tsx
│ │ ├── Reports.tsx
│ │ └── Analytics.tsx
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.app.json
├── vite.config.ts
├── package.json
└── README.md

📦 Features
✅ Dashboard Page
Interactive table listing articles

Keywords with traffic metrics

Word counts, created date, actions

Tabbed filters (Generated / Published / Archived)

Search input for filtering by title or keyword

WordPress-style publish icon

✅ Analytics Page
Horizontal bar chart showing word count per article

Built with Recharts

✅ Sidebar Navigation
Highlights active route

Responsive design

📊 Chart Example

✨ Customization
Modify mockData in dashboard-table.tsx to plug in real data.

Add more charts in components/charts/.

Replace tabs with backend-driven filters if needed.

Extend Reports.tsx with content, KPIs, or charts.

🧩 Useful Commands
Command	Description
npm run dev	Run development server
npm run build	Create production build
npm run preview	Preview production build locally

📚 Credits
Tailwind CSS

shadcn/ui

Recharts

Framer Motion




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
