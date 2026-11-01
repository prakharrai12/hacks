# HACKS 2026 — Official Website Deployment Guide
**Hub for Advanced Creativity, Knowledge & Solutions**
Presented by **New Age Research Initiatives (NARI)**

---

## 🚀 Quick Deployment Options (Choose Any)

This zip package contains both:
1. **The Pre-built Production Files** (`dist/` folder) — **Ready to deploy immediately** without running any terminal commands or installing Node.js.
2. **The Complete Source Code** (`src/`, `public/`, `package.json`, etc.) — Ready to build, modify, or deploy via automated CI/CD git repositories.

---

### Option 1: Immediate Drag-and-Drop Deployment (No Terminal Needed)

If you just want to get the website live in 60 seconds:

#### A. Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. In the dashboard, click **Add New Project** -> **Deploy Existing Folder** (or use the Vercel CLI).
3. Drag and drop the `dist` folder directly onto Vercel, or push this repository to GitHub and import it.
4. Framework Preset: **Vite** (Root directory: `./`, Output directory: `dist`).
5. Click **Deploy**.

#### B. Netlify
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `dist` folder into the upload box.
3. Your site will be live instantly with an SSL certificate.

#### C. Cloudflare Pages
1. Go to the Cloudflare dashboard -> **Workers & Pages** -> **Create application** -> **Pages**.
2. Select **Upload assets** and drop the `dist` folder, or connect to your GitHub repo.
3. Click **Deploy Site**.

#### D. Traditional Web Hosting (cPanel / Apache / Nginx / Hostinger / GoDaddy)
1. Open your hosting File Manager or connect via SFTP.
2. Navigate to your website root directory (usually `public_html` or `www`).
3. Upload all files from inside the `dist/` directory directly into `public_html`.
4. Ensure your web server has a fallback rewrite for single-page apps (SPA) so refreshing deep links works:
   - **For Apache (`.htaccess` included in dist):**
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
   - **For Nginx:**
     ```nginx
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```

---

### Option 2: Build From Source (Node.js & npm)

If you are deploying from source or integrating with a CI/CD pipeline:

#### Prerequisites:
- **Node.js**: v18.0.0 or later (Node 20+ recommended).
- **Package Manager**: `npm` (comes with Node.js).

#### 1. Install Dependencies:
```bash
npm install
```

#### 2. Local Development & Preview:
```bash
# Start local development server with hot-reload (http://localhost:5173/)
npm run dev

# Or preview the production build locally:
npm run preview
```

#### 3. Build Production Bundle:
```bash
npm run build
```
This generates the optimized, minified bundle in the `dist/` directory.

---

## ⚙️ How to Update Event Details & Configuration

All hackathon event details are centralized in one single file:
👉 **[`src/config/hackathonConfig.js`](src/config/hackathonConfig.js)**

### Key Settings:
- **Unstop Registration Link:**
  ```javascript
  registration: {
    unstopUrl: 'https://unstop.com/your-official-hackathon-url',
    feePerMember: 500,
    minTeamSize: 2,
    maxTeamSize: 5,
    registrationDeadline: 'October 25, 2026, 12:00 AM IST',
    round1SubmissionDeadline: 'November 15, 2026, 06:36 AM IST',
  }
  ```
- **Dates & Grand Finale:**
  ```javascript
  event: {
    dates: 'Nov 21 – 22, 2026',
    round1Dates: 'Oct 25 – Nov 15, 2026',
    round2Dates: 'Nov 21 – 22, 2026',
    venue: 'Delhi Technical Campus (DTC), Greater Noida',
    venueAddress: 'Plot No. 28/1, Knowledge Park III, Greater Noida, Uttar Pradesh 201306',
  }
  ```
- **Official Socials:**
  ```javascript
  socials: {
    whatsapp: 'https://chat.whatsapp.com/DZ1uOWeWatjFYibQln1cV9',
    instagram: 'https://www.instagram.com/nari.hackathons/',
    instagramHandle: '@nari.hackathons',
  }
  ```
- **Prize Pool:** Set `prizes.totalPool` (currently `₹1,00,000+`).
- **Mentors List:** Add mentors to the `mentors.list` array when finalized.

After updating `src/config/hackathonConfig.js`, run `npm run build` to update the `dist` folder.

---

## 📁 Package Directory Structure

```text
nari-hacks-2026/
├── DEPLOYMENT_GUIDE.md    <- This deployment reference guide
├── README.md              <- Project overview & developer guide
├── package.json           <- Project dependencies and build scripts
├── package-lock.json      <- Deterministic dependency lockfile
├── vite.config.js         <- Vite + Tailwind CSS configuration
├── index.html             <- HTML entrypoint with metadata and SEO
├── public/                <- Static assets (logos, images, favicon)
│   ├── hacks-logo-transparent.png
│   ├── nari-logo.png
│   └── makunai-logo.png
├── src/                   <- React source code
│   ├── App.jsx            <- Top-level application router
│   ├── index.css          <- Global typography and theme tokens
│   ├── config/
│   │   └── hackathonConfig.js <- Single source of truth for all content
│   ├── components/        <- UI components (Hero, Venue, Themes, Schedule, etc.)
│   └── pages/             <- Page views (HomePage, MentorsPage)
└── dist/                  <- Pre-built, production-ready static bundle
    ├── index.html
    └── assets/
        ├── index-*.css
        └── index-*.js
```

---
*Developed for **New Age Research Initiatives (NARI)** • thehacks.in*
