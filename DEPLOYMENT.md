# Deployment Guide - Portfolio Website

This guide will help you deploy your portfolio website to the internet with a custom domain using Vercel.

## Prerequisites

1. A GitHub account (or GitLab/Bitbucket)
2. A Vercel account (free tier is sufficient)
3. A Resend account (for email functionality) - [Get one here](https://resend.com)
4. A custom domain (optional but recommended)

## Step 1: Prepare Your Code

### 1.1 Initialize Git Repository

If you haven't already, initialize a git repository:

```bash
git init
git add .
git commit -m "Initial commit"
```

### 1.2 Push to GitHub

1. Create a new repository on GitHub
2. Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Resend API Key

Your contact form requires a Resend API key:

1. Go to [https://resend.com](https://resend.com) and sign up (free tier available)
2. Create an API key in the Resend dashboard
3. Save this key - you'll need it for Vercel environment variables

## Step 3: Deploy to Vercel

### 3.1 Connect to Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign in (or sign up with GitHub)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js

### 3.2 Configure Environment Variables

In the Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add the following:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key from Step 2
   - **Environment**: Select all (Production, Preview, Development)

3. Click **Save**

### 3.3 Deploy

1. Click **Deploy**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at: `https://YOUR_PROJECT_NAME.vercel.app`

## Step 4: Add Custom Domain

### 4.1 Add Domain in Vercel

1. Go to your project in Vercel dashboard
2. Click **Settings** → **Domains**
3. Enter your custom domain (e.g., `yourname.com` or `www.yourname.com`)
4. Click **Add**

### 4.2 Configure DNS

Vercel will show you DNS configuration options:

**Option A: Using A Record (Root Domain)**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Option B: Using CNAME (Subdomain)**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Option C: Redirect www to root (Recommended)**

1. Add root domain with DNS provider:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
2. Add www subdomain in Vercel
3. In Vercel, set up redirect from www to root domain (optional)

### 4.3 Verify Domain

1. Go to your domain registrar (where you bought your domain)
2. Update DNS settings according to Vercel's instructions
3. Wait for DNS propagation (can take a few minutes to 48 hours)
4. Vercel will automatically verify and configure SSL (HTTPS)

## Step 5: Update Email Configuration (Optional)

Once your domain is set up, you can update the email sender:

1. In Resend dashboard, verify your domain
2. Update the `from` field in `app/api/send-email/route.ts`:
   ```typescript
   from: 'Portfolio Contact <contact@yourdomain.com>',
   ```

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify TypeScript compiles without errors: `npm run build`

### Email Not Working
- Verify `RESEND_API_KEY` is set in Vercel environment variables
- Check Resend dashboard for API key validity
- Test with the Resend API directly

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS settings match Vercel's requirements
- Use online DNS checker tools to verify

### 404 Errors
- Ensure you're using Next.js App Router correctly
- Check `next.config.js` for any routing issues

## Cost Estimate

- **Vercel**: Free tier (hobby plan) - sufficient for personal portfolios
- **Resend**: Free tier includes 100 emails/day
- **Domain**: ~$10-15/year (varies by registrar)

## Success Checklist

- ✅ Code pushed to GitHub
- ✅ Vercel project connected to GitHub
- ✅ `RESEND_API_KEY` environment variable configured
- ✅ Site deployed and accessible
- ✅ Custom domain added and verified
- ✅ HTTPS automatically enabled
- ✅ Contact form working

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Resend Documentation: https://resend.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment

Your portfolio is now live on the internet! 🚀

