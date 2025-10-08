# SkillX Home

The landing page and marketing site for the SkillX platform, built with Next.js and featuring a modern, responsive design.

## 🚀 Features

- **Modern Landing Page**: Professional marketing site with hero section
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Theme toggle with system preference detection
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Meta tags and structured data
- **Component Architecture**: Reusable React components

## 🛠️ Technology Stack

- **Next.js 15.5.4** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting

## 📁 Project Structure

```
skillx-home/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── sections/        # Page sections
│   │       ├── Benefits.tsx    # Benefits section
│   │       ├── TrustedBy.tsx    # Trusted by section
│   │       ├── WhoAreWe.tsx     # About section
│   │       └── index.tsx         # Section exports
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   └── ThemeToggle.tsx  # Dark/light mode toggle
│   └── public/              # Static assets
│       ├── logo.png         # Company logo
│       ├── first.png        # Hero images
│       ├── second.png       # Feature images
│       └── nic.png          # Additional assets
├── public/                  # Static assets
├── Dockerfile              # Docker configuration
├── makefile               # Build automation
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3001](http://localhost:3001)

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint

# Code Quality
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🎨 Design System

### Components

- **Header**: Navigation with logo and theme toggle
- **Hero Section**: Main landing area with call-to-action
- **Benefits**: Feature highlights and value propositions
- **TrustedBy**: Social proof and testimonials
- **WhoAreWe**: Company information and team

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first breakpoints
- **Dark Mode**: Automatic theme switching
- **Custom Components**: Reusable React components
- **Typography**: Consistent font hierarchy

### Theme System

The site supports both light and dark themes:

- **System Preference**: Automatically detects user preference
- **Manual Toggle**: Users can override system preference
- **Persistent**: Theme choice is saved in localStorage
- **Smooth Transitions**: Animated theme switching

## 🐳 Docker Support

### Development with Docker

```bash
# Build the image
docker build -t skillx-home .

# Run the container
docker run -p 3001:3000 skillx-home
```

### Docker Compose

The landing page is included in the main `docker-compose.yml`:

```yaml
services:
  home:
    build: ./skillx-home
    ports:
      - "3001:3000"
    environment:
      - NODE_ENV=production
```

## 🔧 Development

### Code Structure

- **App Router**: Uses Next.js 13+ App Router
- **Component Architecture**: Modular, reusable components
- **Type Safety**: Full TypeScript coverage
- **Performance**: Optimized images and fonts

### Styling Guidelines

- **Tailwind Classes**: Use utility classes for styling
- **Component Variants**: Create reusable component variants
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Follow WCAG guidelines

### Environment Variables

No environment variables are required for basic functionality. Optional variables:

```env
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
NEXT_PUBLIC_SITE_URL=https://skillx.com
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Static Export

For static hosting:

```bash
npm run build
npm run export
```

### Vercel Deployment

1. **Connect to Vercel**:
   - Import project from GitHub
   - Configure build settings
   - Deploy automatically

2. **Environment Variables**:
   - Set any required environment variables
   - Configure custom domains

### Docker Production

```bash
# Build production image
docker build -t skillx-home:latest .

# Run with production environment
docker run -d \
  --name skillx-home \
  -p 3001:3000 \
  -e NODE_ENV=production \
  skillx-home:latest
```

## 📊 Performance

### Optimization Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Optimized font loading
- **Code Splitting**: Automatic code splitting
- **Static Generation**: Pre-rendered pages
- **CDN Ready**: Optimized for CDN delivery

### Performance Metrics

- **Lighthouse Score**: 90+ performance score
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimal JavaScript bundle
- **Loading Speed**: Fast initial page load

## 🔍 SEO

### SEO Features

- **Meta Tags**: Comprehensive meta tag setup
- **Structured Data**: JSON-LD structured data
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives
- **Open Graph**: Social media sharing optimization

### SEO Best Practices

1. **Page Titles**: Descriptive, keyword-rich titles
2. **Meta Descriptions**: Compelling descriptions under 160 characters
3. **Heading Structure**: Proper H1-H6 hierarchy
4. **Alt Text**: Descriptive image alt text
5. **Internal Linking**: Strategic internal link structure

## 🎯 Analytics

### Tracking Setup

The site is ready for analytics integration:

- **Google Analytics**: Easy integration
- **Custom Events**: Track user interactions
- **Performance Monitoring**: Core Web Vitals tracking
- **Conversion Tracking**: Goal and funnel tracking

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check TypeScript errors and dependencies
2. **Styling Issues**: Verify Tailwind CSS configuration
3. **Image Loading**: Ensure images are in the public directory
4. **Theme Issues**: Check localStorage and system preferences

### Debug Commands

```bash
# Check for TypeScript errors
npm run build

# Lint code
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check
```

## 📚 Component Documentation

### Header Component

Navigation header with:
- Logo and branding
- Theme toggle button
- Responsive navigation
- Accessibility features

### Theme Toggle

Dark/light mode toggle with:
- System preference detection
- Manual override capability
- Smooth transitions
- Persistent storage

### Page Sections

- **Hero**: Main landing section with CTA
- **Benefits**: Feature highlights
- **TrustedBy**: Social proof
- **WhoAreWe**: Company information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Guidelines

- **Code Style**: Follow ESLint and Prettier rules
- **Component Design**: Create reusable components
- **Accessibility**: Ensure WCAG compliance
- **Performance**: Optimize for speed and efficiency

## 📄 License

This project is part of the SkillX infrastructure and follows the same licensing terms.