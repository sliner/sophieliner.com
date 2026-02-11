# Sophie Liner Portfolio - FIXED FOR PRODUCTION ✅

## What Was Fixed

1. ✅ **Removed Tailwind CDN** - The `<script src="https://cdn.tailwindcss.com"></script>` line has been removed
2. ✅ **Installed Tailwind CSS locally** - Added as a proper npm dependency
3. ✅ **Added configuration files**:
   - `tailwind.config.js` - Tailwind configuration
   - `postcss.config.js` - PostCSS configuration  
   - `index.css` - CSS file with Tailwind directives
4. ✅ **Updated `index.tsx`** - Now imports `./index.css`
5. ✅ **Updated `index.html`** - Removed CDN script and import maps

## How to Deploy

### Step 1: Upload to GitHub

1. Go to: https://github.com/sliner/sophieliner.com
2. Click **"Add file"** → **"Upload files"**
3. **Drag ALL files from this folder** (or select them)
4. Scroll down and click **"Commit changes"**

### Step 2: Vercel Will Auto-Deploy

Vercel will automatically detect the changes and redeploy your site within 2-3 minutes!

## Your Live Site

Once deployed, your site will be available at:
- ✅ https://www.sophieliner.com
- ✅ https://sophieliner.com

## Local Development (Optional)

If you want to run locally:

```bash
npm install
npm run dev
```

Then visit http://localhost:3000
