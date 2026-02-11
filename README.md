# Sophie Liner Portfolio - Fixed for Production

This is your portfolio website with Tailwind CSS properly installed for production deployment.

## What Was Fixed

1. **Removed Tailwind CDN** - The CDN link doesn't work in production
2. **Installed Tailwind locally** - Added tailwindcss, postcss, and autoprefixer as dev dependencies
3. **Added configuration files**:
   - `tailwind.config.js` - Tailwind configuration
   - `postcss.config.js` - PostCSS configuration
   - `index.css` - CSS file with Tailwind directives
4. **Updated `index.tsx`** - Now imports the CSS file

## How to Deploy This Fix

### Option 1: Replace Your GitHub Repo Files

1. Download this fixed version
2. Delete everything in your GitHub repo
3. Upload all these fixed files
4. Vercel will automatically redeploy

### Option 2: Use Git Locally

```bash
# Navigate to your project folder
cd path/to/sophieliner.com

# Copy all these fixed files over your existing ones

# Commit and push
git add .
git commit -m "Fix Tailwind CSS for production"
git push
```

Vercel will automatically detect the changes and redeploy your site!

## Your site will be live at:
- https://www.sophieliner.com
- https://sophieliner.com
