# Netlify Deployment Guide - Portfolio Website

This guide will help you deploy your portfolio to Netlify (no phone verification required!).

## Prerequisites

1. ✅ Your code is already on GitHub at `melon416/daichi-al-fullstack-portfolio`
2. A Netlify account (free, no phone verification needed)
3. A Resend account (for email functionality) - [Get one here](https://resend.com)
4. A custom domain (optional)

## Step 1: Get Resend API Key

1. Go to [https://resend.com](https://resend.com) and sign up (free tier available)
2. Navigate to **API Keys** section
3. Click **"Create API Key"**
4. Copy the key (starts with `re_...`)
5. Save it for Step 3

## Step 2: Deploy to Netlify

### 2.1 Sign Up / Sign In

1. Go to [https://app.netlify.com/signup](https://app.netlify.com/signup)
2. Click **"Sign up with GitHub"** (no phone verification needed!)
3. Authorize Netlify to access your GitHub

### 2.2 Import Your Project

1. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Select **"GitHub"** as your Git provider
3. Find and select your repository: `daichi-al-fullstack-portfolio`
4. Click **"Next"**

### 2.3 Configure Build Settings

Netlify should auto-detect Next.js, but verify:
- **Build command**: `npm run build`
- **Publish directory**: `.next` (or leave empty - Netlify Next.js plugin handles this)

### 2.4 Add Environment Variable

**Before deploying**, click **"Show advanced"** → **"New variable"**:

- **Key**: `RESEND_API_KEY`
- **Value**: [Paste your Resend API key from Step 1]

### 2.5 Deploy!

1. Click **"Deploy site"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://random-name-123456.netlify.app`

### 2.6 Change Site Name (Optional)

1. Go to **Site settings** → **Change site name**
2. Enter a custom name (e.g., `daichi-portfolio`)
3. Your new URL: `https://daichi-portfolio.netlify.app`

## Step 3: Add Custom Domain

### 3.1 Add Domain in Netlify

**Option 1: Direct Access (Easiest)**
1. Click **"Domain management"** in the left sidebar
2. Click **"Add domain"** or **"Add custom domain"**
3. Enter your domain (e.g., `yourname.com`)
4. Click **"Verify"** or **"Add"**

**Option 2: Via Custom Domain Card**
1. On the Project Overview page, find the **"Custom domain"** card
2. Click **"Go to Domain management"** button
3. Follow the steps above

**Note:** In Netlify, "Domain management" is directly accessible from the sidebar - no need to go through "Site settings" first!

### 3.2 Configure DNS

Netlify will show you DNS configuration options:

**For Root Domain (yourname.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www Subdomain (www.yourname.com):**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### 3.3 Update DNS at Your Domain Provider

1. Go to your domain registrar (where you bought your domain)
2. Find DNS settings
3. Add the DNS records as shown in Netlify
4. Wait for DNS propagation (can take a few minutes to 48 hours)

### 3.4 Enable HTTPS

1. Netlify automatically provisions SSL certificates
2. Go to **SSL/TLS** settings
3. Click **"Verify DNS configuration"**
4. Once verified, HTTPS will be automatically enabled

## Step 4: Verify Everything Works

✅ Visit your deployed site  
✅ Test the contact form  
✅ Check that HTTPS is enabled  
✅ Verify custom domain works (if added)

## Troubleshooting

### Build Fails
- Check Netlify build logs for errors
- Verify `netlify.toml` is in your repository root
- Ensure all dependencies are in `package.json`

### Email Form Not Working
- Verify `RESEND_API_KEY` is set in Netlify environment variables
- Check Netlify function logs: **Functions** tab in Netlify dashboard
- Test Resend API key is valid

### Domain Issues
- Wait 24-48 hours for DNS propagation
- Use online DNS checkers: [whatsmydns.net](https://www.whatsmydns.net)
- Verify DNS records match Netlify's requirements

### API Route (Contact Form) Issues
- Netlify Next.js plugin automatically handles API routes
- Check **Functions** tab in Netlify dashboard for logs
- Ensure `@netlify/plugin-nextjs` is working (it should auto-install)

## Cost Estimate

- **Netlify**: Free tier - 100 GB bandwidth/month, sufficient for personal portfolios
- **Resend**: Free tier - 100 emails/day
- **Domain**: ~$10-15/year (varies by registrar)

## Success Checklist

- ✅ Code pushed to GitHub
- ✅ Netlify account created (no phone verification!)
- ✅ Site imported from GitHub
- ✅ `RESEND_API_KEY` environment variable configured
- ✅ Site deployed and accessible
- ✅ Contact form working
- ✅ Custom domain added (optional)
- ✅ HTTPS automatically enabled

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Next.js Plugin](https://github.com/netlify/netlify-plugin-nextjs)
- [Resend Documentation](https://resend.com/docs)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)

Your portfolio is now live on the internet! 🚀

