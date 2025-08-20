# Create Dev Solve Website

A retro-tech inspired website for Create Dev Solve - where creativity meets code. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🎨 Design Features

- **Retro Fonts**: Press Start 2P for headings and VT323 for code-style elements
- **Dark Theme**: Deep navy backgrounds with vibrant green accents
- **Interactive Elements**: Hover animations and smooth transitions
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Code Aesthetic**: Terminal-style elements and pixelated design

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Google Fonts** (Press Start 2P, VT323)

## 📦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/atfleming/create-dev-solve-website.git
   cd create-dev-solve-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Components

- **Hero Section**: Main landing with retro typography
- **About Section**: Company information with terminal-style design
- **Services**: Service offerings display
- **Portfolio**: Project showcase
- **Newsletter**: Email signup
- **Navigation**: Responsive nav with GitHub integration

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically with every push to main

### Netlify
1. Connect repository or drag & drop the `dist` folder
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for automatic deployment

## 🎨 Customization

### Colors
Custom colors are defined in `tailwind.config.js`:
- `pastel-green`: #bff7cf
- `deep-navy`: #071020

### Fonts
Retro fonts are loaded via Google Fonts in `src/index.css`:
- Press Start 2P (headings, buttons)
- VT323 (code elements)

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Newsletter.tsx
│   ├── Portfolio.tsx
│   └── Services.tsx
├── App.tsx
├── AppRouter.tsx
├── index.css
└── index.tsx
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 📝 License

This project is private. All rights reserved.

## 🤝 Contributing

This is a private project for Create Dev Solve.

---

**Create Dev Solve** - Where creativity meets code 🚀
