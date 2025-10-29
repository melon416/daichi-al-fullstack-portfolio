# Luis Miguel Arreaza Guevara - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- 🎨 **Beautiful Design**: Gradient backgrounds, animations, and modern UI
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Performance Optimized**: Fast loading and smooth animations
- 🎭 **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- 🌟 **Professional Content**: Based on real resume and experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   └── page.tsx
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Sections

- **Hero**: Eye-catching introduction with animated elements
- **About**: Personal story and achievements
- **Skills**: Technology expertise with progress bars
- **Experience**: Work history with detailed achievements
- **Projects**: Featured projects with technologies used
- **Contact**: Contact form and information

## Customization

To customize this portfolio for your own use:

1. Update personal information in the components
2. Modify the color scheme in `tailwind.config.js`
3. Replace placeholder content with your own
4. Update the resume.txt content as needed

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel or [NETLIFY_DEPLOYMENT.md](NETLIFY_DEPLOYMENT.md) for Netlify instructions.

### Quick Deploy to Netlify (No Phone Verification Required!)

1. **Get Resend API Key**: Sign up at [resend.com](https://resend.com) and create an API key
2. **Deploy to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com/signup) and sign up with GitHub
   - Click "Add new site" → Import your GitHub repo
   - Add environment variable: `RESEND_API_KEY`
   - Click "Deploy site" - live in ~3 minutes!
3. **Add Custom Domain** (optional):
   - In Netlify, go to Site settings → Domains
   - Add your domain and configure DNS

### Quick Deploy to Vercel

1. **Push to GitHub**: Commit and push your code to a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project" and import your GitHub repo
3. **Add Environment Variable**:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` with your Resend API key
4. **Deploy**: Click Deploy - your site will be live in ~2 minutes!

### Required Environment Variables

- `RESEND_API_KEY` - Your Resend API key for contact form emails
  - Get one at [resend.com](https://resend.com) (free tier available)

## License

This project is open source and available under the [MIT License](LICENSE).
