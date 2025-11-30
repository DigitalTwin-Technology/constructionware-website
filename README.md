# Constructionware Website

**AI-Powered Construction & Infrastructure Monitoring Platform**

A modern, responsive website showcasing Constructionware's advanced features including real-time 4D construction monitoring, AI-driven 3D reconstruction, safety & quality control, and infrastructure health monitoring.

## 🌟 Features

### Core Functionality
- **8 Feature Modals** with embedded YouTube videos showcasing:
  - Real-Time 4D Construction Monitoring
  - AI-Driven 3D Reconstruction & BIM Comparison
  - AI-Based Safety & Quality Control
  - Airport Runway Maintenance with Computer Vision AI
  - Discrete Event Simulation Sandbox
  - Concrete Curing Simulation & Strength Estimation
  - Civil Infrastructure Health Monitoring
  - Drone & Sensor Data Fusion with Physics-Induced AI

- **Benefits Section**
  - Key Benefits overview
  - Who Can Benefit from Constructionware

- **About Section**
  - Company information
  - Platform capabilities

- **Contact Form**
  - Integrated with FormSubmit (free email service)
  - Sends to: info@digitaltwin.technology
  - Beautiful thank you page
  - Spam protection

- **Legal Notice**
  - Complete company information
  - Management team details
  - Registration & tax information
  - Legal terms & disclaimer
  - Data protection information

### Design Features
- **Modern Dark Theme** with lime green accents
- **Fully Responsive** - works on desktop, tablet, and mobile
- **Smooth Animations** - modal transitions, hover effects
- **Professional UI** - card-based layouts, gradient backgrounds
- **Mobile Menu** - hamburger menus for features and actions
- **Video Integration** - YouTube embeds with custom controls

## 📁 Project Structure

```
constructionware-website/
├── index.html              # Main landing page
├── styles.css              # All styling and responsive design
├── script.js               # Interactive functionality and modals
├── thank-you.html          # Form submission confirmation page
├── images/                 # Image assets
│   ├── constructionware-logo.png
│   └── background.svg
└── README.md               # This file
```

## 🚀 Live Deployment

### Prerequisites
- Web server (Apache, Nginx, or any static hosting)
- Domain name (optional but recommended)
- SSL certificate (recommended for HTTPS)

### Deployment Options

#### Option 1: Static Hosting Services (Recommended)
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the folder
- **GitHub Pages**: Enable in repository settings
- **AWS S3 + CloudFront**: Upload and configure distribution

#### Option 2: Traditional Web Server
1. Upload all files to your web server
2. Ensure directory permissions are correct
3. Point your domain to the server
4. Configure SSL certificate

### Environment-Specific Configuration

**IMPORTANT:** Before deploying to production, update the FormSubmit redirect URL in `script.js`:

```javascript
// Find this line in renderDemoModal function:
html += `<input type="hidden" name="_next" value="${window.location.origin}/thank-you.html">`;

// For production, replace with your actual domain:
html += `<input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">`;
```

## 📧 Contact Form Setup

The contact form uses **FormSubmit** (completely free, no backend required).

### First-Time Activation
1. Deploy the website
2. Have someone submit the contact form (or submit it yourself)
3. **CHECK YOUR EMAIL** at `info@digitaltwin.technology`
4. **CLICK THE CONFIRMATION LINK** in the email from FormSubmit
5. After confirmation, all future submissions will automatically be sent to your inbox

### What You'll Receive
Each form submission includes:
- Full Name
- Email Address
- Company Name (if provided)
- Phone Number (if provided)
- Message

## 🎨 Customization

### Colors
Main brand colors are defined in `styles.css`:
- Primary: `#a3e635` (Lime Green)
- Background: `#0f0f0f` (Dark)
- Text: `#e5e7eb` (Light Gray)

### Content
All content is defined in `script.js` in the `modalContent` object. Update text, add/remove features, or modify video URLs there.

### Images
Replace images in the `images/` directory:
- `constructionware-logo.png` - Main logo
- `background.svg` - Background pattern

## 🛠️ Local Development

### Running Locally
```bash
# Navigate to project directory
cd constructionware-website

# Start a local server (Python 3)
python3 -m http.server 8000

# Or use Node.js
npx http-server -p 8000

# Visit in browser
http://localhost:8000
```

### Testing on Mobile Device
1. Find your computer's local IP: `ifconfig | grep "inet "`
2. Ensure mobile device is on same WiFi network
3. Visit: `http://YOUR_IP:8000`

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Modern styling, flexbox, grid, animations
- **JavaScript (ES6)** - Modal management, form handling
- **FormSubmit** - Free form-to-email service
- **YouTube Embed API** - Video integration

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- No external frameworks (lightweight)
- Optimized images
- Minimal JavaScript
- Fast load times

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Stacked layouts, hamburger menus
- **Tablet**: 768px - 1024px - Mixed layouts
- **Desktop**: > 1024px - Full sidebar navigation, two-column layouts

## 🔒 Security

- Spam protection via honeypot field
- Form validation (client-side)
- No sensitive data stored locally
- HTTPS recommended for production

## 📞 Support

For questions or issues:
- **Email**: info@digitaltwin.technology
- **Phone**: +49 221 398 808 00
- **Address**: Schaafenstrasse 25, 50676 Köln, Germany

## 📄 License

© 2025 DigitalTwin Technology GmbH. All Rights Reserved.

## 🎯 Future Enhancements

Potential improvements:
- [ ] Multi-language support (DE/EN)
- [ ] Blog/News section
- [ ] Client testimonials
- [ ] Case studies
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA features

---

**Built with ❤️ by DigitalTwin Technology GmbH**
