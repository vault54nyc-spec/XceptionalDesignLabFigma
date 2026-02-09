# Xceptional Design Lab

Strategic operations by design. Fortune 500 expertise for growing companies.

## Overview

Xceptional Design Lab provides Chief of Staff-level strategic consulting across four core service areas: Operations, Design & Brand, Communications, and Technical Architecture. We bring enterprise-grade expertise to growing companies that need strategic partners without full-time overhead.

## Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Wouter** - Lightweight routing
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend

- **Express** - Node.js web framework
- **TypeScript** - Type-safe server code

### Development Tools

- **pnpm** - Fast, disk space efficient package manager
- **Prettier** - Code formatting
- **ESBuild** - JavaScript bundler

## Prerequisites

- **Node.js** v18 or higher
- **pnpm** v10.4.1 or higher

## Local Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/vault54nyc-spec/xceptional-design-lab.git
   cd xceptional-design-lab
   ```

2. **Install pnpm** (if not already installed)

   ```bash
   npm install -g pnpm@10.4.1
   ```

3. **Install dependencies**

   ```bash
   pnpm install
   ```

4. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and configure variables as needed. See [Environment Variables](#environment-variables) section below.

5. **Start development server**

   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm preview` - Preview production build locally
- `pnpm check` - Type check without emitting files
- `pnpm format` - Format code with Prettier

## Environment Variables

Create a `.env` file based on `.env.example`:

### Required

- `VITE_APP_TITLE` - Application title (default: "Xceptional Design Lab")
- `VITE_APP_LOGO` - Path to logo (default: "/xceptional-logo-hero.png")
- `NODE_ENV` - Environment (development/production)

### Optional

- `PORT` - Server port (default: 3000)
- `VITE_FORMSPREE_ENDPOINT` - Formspree endpoint for contact form
  - Sign up at [formspree.io](https://formspree.io/)
  - Create a form and add endpoint URL
- `VITE_ANALYTICS_ENDPOINT` - Umami analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Umami website ID

## Project Structure

```
xceptional-design-lab/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   │   ├── images/        # Image assets
│   │   ├── robots.txt     # SEO robots file
│   │   └── sitemap.xml    # SEO sitemap
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and helpers
│   │   └── main.tsx       # Application entry point
│   └── index.html         # HTML template
├── server/                # Backend server
│   └── index.ts          # Express server
├── shared/               # Shared code between client/server
├── dist/                 # Build output (generated)
├── vercel.json          # Vercel deployment config
├── vite.config.ts       # Vite configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Building for Production

1. **Build the application**

   ```bash
   pnpm build
   ```

   This creates optimized production files in `dist/`:
   - `dist/public/` - Frontend static files
   - `dist/index.js` - Backend server bundle

2. **Test production build locally**

   ```bash
   pnpm start
   ```

   Open `http://localhost:3000` to verify

## Deployment

The application is configured for deployment on Vercel.

**Important:** Before deploying to production, update placeholder domains in:
- `client/public/sitemap.xml` (replace `yourdomain.com`)
- `client/public/robots.txt` (replace `yourdomain.com`)
- `client/index.html` (Open Graph URL meta tag)

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vault54nyc-spec/xceptional-design-lab)

### Manual Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions including:

- Vercel deployment setup
- Environment variable configuration
- Custom domain setup
- Troubleshooting guide
- Post-deployment checklist

## Contact Form Setup

The contact form uses Formspree for submissions:

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form
3. Copy your form endpoint
4. Add to `.env`:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
5. Redeploy or restart dev server

## Performance Optimization

For image optimization guidance, see [IMAGE-OPTIMIZATION.md](./IMAGE-OPTIMIZATION.md).

Key optimizations already implemented:

- Code splitting by route
- Lazy loading of components
- Optimized asset caching via Vercel headers
- Modern image formats support
- Responsive images

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Ensure code passes type checking: `pnpm check`
4. Format code: `pnpm format`
5. Test build: `pnpm build`
6. Submit a pull request

## Code Style

- Use TypeScript for type safety
- Follow existing code patterns
- Use Prettier for formatting (run `pnpm format`)
- Keep components small and focused
- Use Tailwind CSS for styling

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT

## Support

For questions or support:

- Email: hello@xceptionaldesignlab.com
- Website: [https://xceptionaldesignlab.com](https://xceptionaldesignlab.com)

## Acknowledgments

Built with modern web technologies and design systems for optimal performance and user experience.
