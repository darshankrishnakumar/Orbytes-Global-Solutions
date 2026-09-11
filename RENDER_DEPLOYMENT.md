# Deploying Orbytes Global Solutions to Render

This guide explains how to properly configure your deployment on [Render](https://render.com) so that all Next.js API routes, database connections, and background video animations work seamlessly.

---

## 🚀 Recommended Render Settings

When deploying to Render, ensure your service is configured as a **Web Service** (Node.js environment):

| Setting | Value |
| :--- | :--- |
| **Service Type** | **Web Service** |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Node Version** | `20.x` or higher |

---

## 🛠️ Environment Variables (in Render Dashboard)

Under your Web Service > **Environment**:
- `NODE_ENV`: `production`
- `NEXT_PUBLIC_SITE_URL`: `https://orbytesglobal.com` (or your `*.onrender.com` URL)
- `TIDB_DATABASE_URL`: Your TiDB Cloud connection string

---

## 🎥 Why the Hero Video Animation Was Failing (And How It Was Fixed)

1. **Non-Streamable MP4 Metadata (`moov` atom at the end)**:
   - The original MP4s had their `moov` index atom placed at the end of the file after 8.8MB of raw data.
   - Browsers on live networks could not stream the video until downloading the entire file.
   - **Fix**: All videos now have **FastStart enabled** (`moov` at byte 28), allowing the browser to begin playing on the very first downloaded packet.

2. **Missing `public/` in Next.js Standalone Build**:
   - Next.js standalone mode only traces node server code and does not copy `public/` assets by default.
   - **Fix**: Updated `package.json` build command to automatically copy `public/` into `.next/standalone/`.

3. **Strict Browser Autoplay Policies on Live HTTPS**:
   - On localhost, browsers are lenient. On production domains, browsers require `muted`, `playsinline`, `webkit-playsinline`, and `onCanPlay` listeners.
   - **Fix**: Added hardened autoplay attributes and a `canplay` kickstart listener to `HeroSection.tsx`.

4. **Zero-Latency Visual Layer**:
   - Added an underlying high-resolution poster image (`/videos/hero-poster.jpg`) so that the hero section is visually crisp from millisecond zero while the video buffers.
