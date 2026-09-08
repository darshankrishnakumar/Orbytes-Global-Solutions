# Deploying Orbytes Global Solutions to Hostinger

This guide covers deployment instructions for **Hostinger**, whether you are using **Hostinger Web / Cloud Hosting (Node.js Application Manager in hPanel)** or **Hostinger VPS**.

---

## 🌐 Production Domain
- **Primary Domain**: `https://orbytesglobal.com`
- **Environment Variable**: `NEXT_PUBLIC_SITE_URL=https://orbytesglobal.com`

---

## Option 1: Hostinger Cloud / Web Hosting (via hPanel Node.js)

Hostinger's hPanel includes a built-in **Node.js** app manager.

### Step 1: Upload the Project
1. In your local workspace, build the project:
   ```bash
   npm ci
   npm run build
   ```
2. Upload the repository files to your Hostinger file manager (inside `domains/orbytesglobal.com/public_html` or a dedicated app subfolder).
   *Make sure `.next/standalone`, `.next/static`, `public`, `package.json`, and `.htaccess` are uploaded.*

### Step 2: Configure Node.js in hPanel
1. Navigate to **hPanel > Advanced > Node.js**.
2. Set the following options:
   - **Node.js version**: `20.x` (LTS)
   - **Application mode**: `Production`
   - **Application root**: `domains/orbytesglobal.com/public_html` (or your app directory)
   - **Application startup file**: `.next/standalone/server.js`
3. Under **Environment Variables**, add:
   - `PORT`: `3000` (or the port assigned by Hostinger)
   - `NODE_ENV`: `production`
   - `NEXT_PUBLIC_SITE_URL`: `https://orbytesglobal.com`
4. Click **Start / Restart** application.

---

## Option 2: Hostinger VPS (Ubuntu + PM2 + Nginx) — Recommended for Best Performance

If you have a Hostinger VPS (KVM), this provides enterprise-level performance and isolated resources.

### Step 1: Clone Repository on the VPS
SSH into your Hostinger VPS:
```bash
ssh root@YOUR_VPS_IP
```

Clone the repository and install dependencies:
```bash
cd /var/www
git clone https://github.com/darshankrishnakumar/Orbytes-Global-Solutions.git orbytes
cd orbytes
npm ci
```

### Step 2: Build the Application
```bash
export NEXT_PUBLIC_SITE_URL="https://orbytesglobal.com"
npm run build
```

Copy the static assets into the standalone directory (Next.js requirement):
```bash
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
```

### Step 3: Start with PM2
Install PM2 globally if not already installed:
```bash
npm install -g pm2
```

Start the application using the included `ecosystem.config.js`:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Step 4: Configure Nginx Reverse Proxy & SSL
Create an Nginx server block:
```nginx
# /etc/nginx/sites-available/orbytesglobal.com
server {
    listen 80;
    server_name orbytesglobal.com www.orbytesglobal.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site and reload Nginx:
```bash
ln -s /etc/nginx/sites-available/orbytesglobal.com /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

Install free Let's Encrypt SSL:
```bash
certbot --nginx -d orbytesglobal.com -d www.orbytesglobal.com
```

---

## 🔍 SEO & Post-Deployment Checklist

- [ ] Visit `https://orbytesglobal.com` and verify the home page loads with 200 OK.
- [ ] Verify favicon shows up on browser tabs (`/icon.svg` & `/favicon.ico`).
- [ ] Verify robots.txt: `https://orbytesglobal.com/robots.txt`.
- [ ] Verify sitemap: `https://orbytesglobal.com/sitemap.xml`.
- [ ] Verify OpenGraph social share card by sharing in WhatsApp or using [https://www.opengraph.xyz/](https://www.opengraph.xyz/).
- [ ] Submit sitemap in **Google Search Console**: `https://orbytesglobal.com/sitemap.xml`.
