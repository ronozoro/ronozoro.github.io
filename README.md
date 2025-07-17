# Mostafa Abdo - Portfolio Website

A clean, modern, and fast portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools required - just open `index.html` in any browser.

## Features

- **Responsive Design**: Mobile-first approach with clean layouts on all devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Performance Optimized**: Under 50KB initial load, lazy loading, and optimized assets
- **Accessible**: Semantic HTML, keyboard navigation, and screen reader friendly
- **SEO Ready**: Meta tags, Open Graph, and structured data for search engines

## Quick Start

1. **Local Development**: Simply open `index.html` in your browser
2. **Deploy to GitHub Pages**: Push to your GitHub repo and enable Pages in settings
3. **Deploy to Netlify**: Drag and drop the entire folder to Netlify
4. **Deploy to Vercel**: Connect your GitHub repo to Vercel

## File Structure

```
ronozoro.github.io/
├── index.html          # Main page with all sections
├── styles.css          # All styles with design tokens
├── script.js           # Interactive functionality
├── data.json           # Resume data in structured format
├── assets/
│   └── images/         # Placeholder for project images
└── README.md           # This file
```

## Customization

### Updating Content

Edit `data.json` to update:
- Personal information and contact details
- Work experience and achievements
- Skills and technologies
- Education history

### Design Tokens

CSS custom properties in `styles.css`:
```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-2xl: 32px;
  --spacing-3xl: 48px;
  --spacing-4xl: 64px;
  
  --radius-base: 8px;
  --radius-large: 16px;
  
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.12);
  
  --color-primary: #0b5fff;
  --color-text: #111;
  --color-muted: #666;
  --color-border: #e0e0e0;
  --color-bg: #ffffff;
  --color-bg-alt: #f8f9fa;
}
```

### Adding Images

1. Add images to `assets/images/`
2. Update image paths in `data.json` or HTML
3. Images are automatically optimized for responsive display

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## Performance Features

- **Critical CSS**: Inline in `<head>` for faster rendering
- **Deferred JavaScript**: Non-blocking script loading
- **System Fonts**: No web font loading overhead
- **Optimized Images**: Responsive with lazy loading support
- **Minimal Dependencies**: Pure vanilla JavaScript

## Accessibility Features

- Semantic HTML structure
- Skip to content link
- Keyboard navigation support
- Focus indicators
- ARIA attributes where needed
- Color contrast ratio 4.5:1+
- Reduced motion respect

## SEO Features

- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Semantic heading hierarchy
- Clean URL structure

## Development

No build process required! The site works directly with:

1. **Live Server**: Use VS Code Live Server extension
2. **Python**: `python -m http.server 8000`
3. **Node.js**: `npx serve .`
4. **File Protocol**: Open `index.html` directly

## Deployment Options

### GitHub Pages
1. Push code to your GitHub repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Or connect your GitHub repository for continuous deployment

### Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Deploy with zero configuration

### Cloudflare Pages
1. Connect your GitHub repository to [Cloudflare Pages](https://pages.cloudflare.com)
2. No build settings needed

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

- **Email**: mostafa.abdu007@gmail.com
- **LinkedIn**: [linkedin.com/in/ronozoro](https://linkedin.com/in/ronozoro)
- **GitHub**: [github.com/ronozoro](https://github.com/ronozoro)

---

Built with ❤️ in Los Angeles
