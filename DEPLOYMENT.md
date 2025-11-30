# Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd constructionware-website
   vercel --prod
   ```

3. **Configure Domain** (optional):
   - Go to Vercel dashboard
   - Add custom domain
   - Update DNS records

**Result**: Your site will be live at `https://your-project.vercel.app`

---

### Option 2: Netlify (Very Easy)

**Method A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Sign in
3. Drag the `constructionware-website` folder to Netlify
4. Done!

**Method B: Git Integration**
1. Connect Netlify to your GitHub account
2. Select the `constructionware-website` repository
3. Click "Deploy"

**Result**: Your site will be live at `https://your-site.netlify.app`

---

### Option 3: GitHub Pages (Free)

1. **Enable GitHub Pages**:
   - Go to repository settings
   - Scroll to "Pages" section
   - Select "main" branch
   - Click "Save"

2. **Access your site**:
   - `https://digitaltwin-technology.github.io/constructionware-website/`

3. **Custom Domain** (optional):
   - Add `CNAME` file with your domain
   - Update DNS records

---

### Option 4: Traditional Web Server

#### Apache Configuration

1. **Upload files**:
   ```bash
   scp -r * user@server:/var/www/html/constructionware
   ```

2. **Create `.htaccess`** (if needed):
   ```apache
   # Enable HTTPS redirect
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Custom error pages
   ErrorDocument 404 /index.html
   ```

3. **Set permissions**:
   ```bash
   chmod -R 755 /var/www/html/constructionware
   ```

#### Nginx Configuration

1. **Create config file** `/etc/nginx/sites-available/constructionware`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       root /var/www/constructionware;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Gzip compression
       gzip on;
       gzip_types text/css application/javascript image/svg+xml;
   }
   ```

2. **Enable site**:
   ```bash
   ln -s /etc/nginx/sites-available/constructionware /etc/nginx/sites-enabled/
   nginx -t
   systemctl reload nginx
   ```

---

## ⚙️ Pre-Deployment Checklist

### 1. Update FormSubmit Redirect URL

In `script.js`, line ~502, update:

```javascript
// BEFORE (local development)
html += `<input type="hidden" name="_next" value="${window.location.origin}/thank-you.html">`;

// AFTER (production)
html += `<input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">`;
```

### 2. Test Contact Form

1. Deploy the site
2. Submit the contact form
3. **CHECK EMAIL**: info@digitaltwin.technology
4. **CLICK CONFIRMATION LINK** from FormSubmit
5. Test again - emails should arrive automatically

### 3. Update Meta Tags (SEO)

In `index.html`, add:

```html
<head>
    <!-- Existing content -->
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Constructionware - AI-Powered Construction & Infrastructure Monitoring Platform">
    <meta name="keywords" content="construction monitoring, BIM, AI construction, infrastructure monitoring">
    <meta name="author" content="DigitalTwin Technology GmbH">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourdomain.com/">
    <meta property="og:title" content="Constructionware - AI Construction Monitoring">
    <meta property="og:description" content="AI-Powered Construction & Infrastructure Monitoring Platform">
    <meta property="og:image" content="https://yourdomain.com/logo.png">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://yourdomain.com/">
    <meta property="twitter:title" content="Constructionware - AI Construction Monitoring">
    <meta property="twitter:description" content="AI-Powered Construction & Infrastructure Monitoring Platform">
    <meta property="twitter:image" content="https://yourdomain.com/logo.png">
</head>
```

### 4. Add Analytics (Optional)

Add Google Analytics or similar:

```html
<!-- Before closing </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔒 SSL Certificate Setup

### Using Let's Encrypt (Free)

```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (runs automatically)
sudo certbot renew --dry-run
```

---

## 🌐 DNS Configuration

Point your domain to your server:

| Type  | Name | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | YOUR_SERVER_IP           | 3600 |
| A     | www  | YOUR_SERVER_IP           | 3600 |
| CNAME | www  | yourdomain.com           | 3600 |

---

## 📊 Performance Optimization

### 1. Enable Gzip Compression

**Apache** (`.htaccess`):
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

**Nginx**:
```nginx
gzip on;
gzip_types text/css application/javascript image/svg+xml;
gzip_min_length 256;
```

### 2. Browser Caching

**Apache**:
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 3. CDN (Optional)

- Use Cloudflare (free tier available)
- Point DNS to Cloudflare
- Enable caching and minification

---

## 🧪 Testing After Deployment

### Checklist

- [ ] Homepage loads correctly
- [ ] All feature modals open and display videos
- [ ] Contact form submits successfully
- [ ] Thank you page appears after form submission
- [ ] Legal Notice displays correctly
- [ ] Responsive design works on mobile
- [ ] All images load
- [ ] Videos play properly
- [ ] SSL certificate is valid
- [ ] Email arrives at info@digitaltwin.technology

### Testing Tools

- **Mobile Responsiveness**: [responsivedesignchecker.com](https://responsivedesignchecker.com)
- **Page Speed**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **SSL Check**: [ssllabs.com](https://www.ssllabs.com/ssltest/)
- **SEO**: [seobility.net](https://www.seobility.net/en/seocheck/)

---

## 🆘 Troubleshooting

### Contact Form Not Working

1. **Check FormSubmit confirmation**:
   - Did you click the confirmation link in email?
   - Check spam folder

2. **Verify redirect URL**:
   - Must match your actual domain
   - Check `script.js` line ~502

3. **Test with different browser**:
   - Clear cache
   - Try incognito mode

### Videos Not Loading

1. **Check YouTube embed URLs**:
   - Verify videos are public
   - Check URL format in `script.js`

2. **Test on different network**:
   - Some corporate networks block YouTube

### SSL Issues

1. **Certificate not valid**:
   ```bash
   sudo certbot renew --force-renewal
   ```

2. **Mixed content warnings**:
   - Ensure all resources use HTTPS
   - Check browser console

---

## 📞 Support

If you encounter issues during deployment:

- **Email**: info@digitaltwin.technology
- **Phone**: +49 221 398 808 00

---

## 🎉 Post-Deployment

Once deployed successfully:

1. ✅ Test all functionality
2. ✅ Monitor form submissions
3. ✅ Set up uptime monitoring (e.g., UptimeRobot)
4. ✅ Schedule regular backups
5. ✅ Keep content updated

---

**🚀 Your website is now live and ready to generate leads!**

