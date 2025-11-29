# Ritesh Godse - Portfolio Website

A production-quality, fully responsive portfolio website built with React, Vite, TypeScript, and Tailwind CSS. Showcasing backend engineering expertise and AI enthusiasm with interactive components, smooth animations, and optimized performance.

![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **⚡ High Performance**: Built with Vite for lightning-fast development and optimized production builds
- **📱 Fully Responsive**: Mobile-first design that works perfectly on all devices
- **🎨 Dark Mode**: System preference detection with smooth theme transitions
- **🎭 Smooth Animations**: Framer Motion animations for engaging interactions
- **♿ Accessible**: WCAG AA compliant with keyboard navigation and semantic HTML
- **🔍 SEO Optimized**: JSON-LD schema, Open Graph tags, sitemap, and robots.txt
- **🚀 Static Site**: Perfect for GitHub Pages deployment with HashRouter
- **💎 Interactive Cursor**: Custom trailing cursor effect (disabled on mobile)
- **📧 Contact Form**: Integrated with Formspree for email submissions
- **📸 Project Showcase**: Project cards with modal details and iFrame embedding

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Local Development

1. **Clone and setup**
```bash
git clone https://github.com/godseritesh/portfolio.git
cd portfolio
npm install
```

2. **Start development server**
```bash
npm run dev
```
The site will open at `http://localhost:3000`

3. **Build for production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx      # Navigation bar with dark mode toggle
│   │   ├── Footer.tsx      # Footer with social links
│   │   ├── Cursor.tsx      # Custom interactive cursor
│   │   └── Animations.tsx  # Framer Motion animation wrappers
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Hero/landing page
│   │   ├── About.tsx       # About, experience, skills, education
│   │   ├── Projects.tsx    # Project showcase with modal
│   │   └── Contact.tsx     # Contact form and methods
│   ├── data/
│   │   └── portfolio.ts    # Content data (experience, skills, projects)
│   ├── hooks/
│   │   └── index.ts        # Custom React hooks
│   ├── utils/
│   │   └── helpers.ts      # Utility functions
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/
│   ├── robots.txt          # SEO robots file
│   ├── sitemap.xml         # SEO sitemap
│   └── resume.pdf          # Downloadable resume
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── jest.config.cjs         # Jest testing configuration
└── README.md               # This file
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready static files |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run test` | Run Jest unit tests |
| `npm test:coverage` | Generate code coverage report |
| `npm run deploy` | Build and deploy to gh-pages branch |

## 🌍 Deployment

### GitHub Pages Setup

1. **Update GitHub repository settings**:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Set root as deploy folder

2. **Ensure main branch push triggers deployment**:
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically runs on push to `main` or `master`
   - It builds the project and deploys to the `gh-pages` branch

3. **Verify deployment**:
   - Visit `https://godseritesh.github.io/portfolio` after successful workflow run

### Custom Domain (Optional)

1. Add `CNAME` file to `public/` directory with your custom domain
2. Configure DNS settings with your domain provider
3. Update repository settings to use custom domain

## 📝 Content Management

### Updating Portfolio Content

All content is centralized in `src/data/portfolio.ts`. Update:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  // ... other details
};

export const projects = [
  // Add/modify projects here
];

export const skills = [
  // Update skill list
];

export const experience = [
  // Add work experience
];
```

### Adding a New Project

Edit `src/data/portfolio.ts`:

```typescript
{
  id: 5,
  title: 'Project Name',
  tagline: 'One-line description',
  description: 'Full project description...',
  technologies: ['Tech1', 'Tech2'],
  category: 'Category',
  tags: ['tag1', 'tag2'],
  liveUrl: 'https://demo.com',
  repoUrl: 'https://github.com/...',
  imageUrl: '/projects/image.png',
  highlights: ['Highlight 1', 'Highlight 2'],
  architecture: {
    frontend: 'Tech used',
    backend: 'Tech used',
    // ...
  },
}
```

### Updating Contact Form

The contact form uses Formspree. To enable emails:

1. Visit [formspree.io](https://formspree.io)
2. Create a new form and get your Form ID
3. Replace `YOUR_FORM_ID` in `src/pages/Contact.tsx` with your actual ID

## 🎨 Customization

### Theming

Tailwind CSS config (`tailwind.config.ts`) defines colors:
- Primary color: Sky blue (`primary-*`)
- Extend in `theme.extend.colors`

### Animations

Framer Motion configurations in component files:
- Page transitions: `PageTransition`
- Container animations: `ContainerAnimation`
- Item animations: `ItemAnimation`

### Styling

Global styles in `src/index.css`:
- CSS animations
- Scrollbar styling
- Custom focus indicators

## 🧪 Testing

Run unit tests:
```bash
npm run test
```

Run with coverage:
```bash
npm run test:coverage
```

Example test file structure:
```typescript
describe('Component', () => {
  it('should render', () => {
    // Test implementation
  });
});
```

## 📊 Performance Optimizations

- **Code Splitting**: Separate vendor chunks for React, Router, and animations
- **Image Optimization**: Use next-gen formats and lazy loading
- **Minification**: Automatic via Vite
- **Lighthouse Target**: 80+ on 4G throttle
- **Tree Shaking**: Unused code removal

Check performance:
```bash
npm run build
# Check dist/ file sizes
```

## ♿ Accessibility

- **WCAG AA Compliant**: Meets Web Content Accessibility Guidelines
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **ARIA Labels**: Descriptive labels for icon buttons
- **Color Contrast**: Text meets WCAG AA contrast requirements

Test with:
- Lighthouse (Chrome DevTools)
- WAVE Browser Extension
- Screen readers (NVDA, JAWS)

## 🔍 SEO

**Included SEO Features:**
- JSON-LD Schema (Person, Organization, SoftwareApplication)
- Open Graph meta tags for social sharing
- Sitemap (`public/sitemap.xml`)
- Robots.txt for search engine crawlers
- Meta descriptions and keywords
- Canonical URLs
- Mobile-friendly viewport

Update meta tags in `index.html`

## 🐛 Troubleshooting

### Issue: Dark mode not working
- Check browser's system preference
- Clear browser cache
- Verify `useDarkMode` hook is mounted

### Issue: Project previews not showing
- Check if target site allows iFrame embedding (X-Frame-Options)
- Falls back to screenshot mode automatically
- Verify project URLs are correct

### Issue: Contact form not sending
- Verify Formspree Form ID is correct
- Check spam folder
- Verify email address is correct

### Issue: Build failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 File Size Recommendations

Target production bundle sizes:
- Main bundle: < 150KB
- Vendor bundle: < 250KB
- Total with assets: < 500KB

Check with: `npm run build` and review `dist/` folder

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see `LICENSE` file for details.

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [GitHub Pages](https://pages.github.com)

## 👤 Author

**Ritesh Godse**
- Backend Engineer & AI Enthusiast
- [GitHub](https://github.com/godseritesh)
- [LinkedIn](https://linkedin.com/in/riteshgodse)
- [Email](mailto:ritesh.godse@gmail.com)

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev)
- Deployed on [GitHub Pages](https://pages.github.com)

---

**Last Updated**: January 2024
**Status**: ✅ Production Ready
