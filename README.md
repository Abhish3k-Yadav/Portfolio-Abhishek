# 🚀 Abhishek Yadav - Portfolio Website

A modern, responsive portfolio website showcasing my skills as a Software Developer and Visual Designer. Built with pure HTML, CSS, and JavaScript, featuring dark/light theme switching, interactive animations, and a fully functional contact form with EmailJS integration.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-013243?style=flat&logo=emailjs&logoColor=white)

## ✨ Features

### 🎨 **Design & UI**

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme** - Toggle between professional themes with smooth animations
- **Modern Gradient Backgrounds** - Professional color schemes with dynamic effects
- **Interactive Animations** - Smooth hover effects, card animations, and transitions
- **Professional Typography** - Clean Raleway font family throughout

### 🌟 **Sections**

- **Hero Section** - Animated profile image with bouncing effect
- **About Me** - Professional introduction with statistics cards
- **Skills & Technologies** - Organized skill categories with interactive tags
- **Projects Portfolio** - Showcase of 6+ development projects with links
- **Contact Section** - Multiple contact methods and functional form

### 📱 **Interactive Elements**

- **Hamburger Menu** - Mobile-responsive navigation
- **Smooth Scrolling** - Navigation links with smooth scroll behavior
- **Card Hover Effects** - Enhanced user interaction with visual feedback
- **Loading States** - Professional loading indicators for form submission

### 📧 **Contact Form**

- **EmailJS Integration** - Real email sending functionality
- **Form Validation** - Client-side validation with error handling
- **Success/Error Messages** - Visual feedback with animations
- **Email Format Validation** - Ensures only valid emails are accepted
- **Anti-spam Protection** - Built-in validation and security

## 🛠️ **Technologies Used**

### **Frontend**

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Font Awesome** - Professional icons throughout the site
- **Google Fonts** - Raleway font family

### **External Services**

- **EmailJS** - Email service integration for contact form
- **CDN Resources** - Font Awesome icons and EmailJS library

### **Development Features**

- **CSS Variables** - Dynamic theming system
- **CSS Grid & Flexbox** - Modern layout techniques
- **LocalStorage API** - Theme preference persistence
- **Form API** - Advanced form handling and validation

## 📂 **Project Structure**

```text
Abhishek-Portfolio/
├── index.html              # Main HTML file
├── style.css               # Main stylesheet with themes
├── utilities.css           # Utility classes and reusable styles
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
├── FIXES_SUMMARY.md        # Code optimization summary
├── EmailJS_Setup_Guide.md  # EmailJS configuration guide
└── assets/                 # Static assets
    ├── abhishek_resume.pdf
    ├── profile-image.png
    ├── logo.png
    ├── fav.svg
    ├── moon.svg             # Dark theme icon
    ├── sun.svg              # Light theme icon
    ├── facebook-icon.svg
    ├── github-icon.svg
    ├── linkedin-icon.svg
    └── hashnode-icon.svg
    └── project/             # Project screenshots
        ├── project-one.png
        ├── project-two.png
        ├── project-three.png
        ├── project-four.png
        ├── project-five.png
        └── project-six.png
```

## 🚀 **Getting Started**

### **Quick Start**

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abhish3k-Yadav/Abhishek-Portfolio.git
   cd Abhishek-Portfolio
   ```

2. **Open in browser**

   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   # or
   start index.html
   ```

3. **View the portfolio**
   - Navigate through different sections
   - Test the theme switcher
   - Try the responsive design on different screen sizes

### **Contact Form Setup** (Optional)
To enable the contact form functionality:

1. **Create EmailJS Account**
   - Visit [EmailJS.com](https://emailjs.com)
   - Create a free account

2. **Configure EmailJS**
    - Follow the detailed guide in `EmailJS_Setup_Guide.md`
    - Update the configuration in `script.js`:

       ```javascript
     emailjs.init("YOUR_PUBLIC_KEY");
     // Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
     ```

## 🎯 **Key Highlights**

### **Performance Optimizations**
- ✅ **Optimized Code** - Removed duplicate code and unused styles
- ✅ **Efficient CSS** - Consolidated styling for better performance
- ✅ **Minimal Dependencies** - Only essential external resources
- ✅ **Fast Loading** - Optimized images and efficient code structure
 - ✅ **Critical CSS** - Inlined essential above-the-fold styles for faster First Paint
 - ✅ **Deferred Scripts** - Non-essential JS loaded with `defer` and idle callbacks
 - ✅ **Lazy Media** - Images below the fold use `loading="lazy"` & `decoding="async"`
 - ✅ **Typewriter Accessibility** - Respects `prefers-reduced-motion`

### **Accessibility Features**
- ✅ **Semantic HTML** - Proper heading hierarchy and structure
- ✅ **Alt Text** - All images include descriptive alt attributes
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **Color Contrast** - Professional color schemes with good contrast

### **SEO Optimized**
- ✅ **Meta Tags** - Comprehensive meta descriptions and keywords
- ✅ **Structured Data** - Proper HTML5 semantic elements
- ✅ **Fast Performance** - Quick loading times
- ✅ **Mobile-First** - Responsive design principles

## 🌟 **Live Demo**

**[View Live Portfolio →](https://www.abhishekyadav.me/)**

*Replace with your actual deployment URL*

## 📏 Performance Budget

Establishing a lightweight performance budget helps keep future changes aligned with speed goals.

| Metric | Target (Mobile 4G) | Notes |
| ------ | ------------------ | ----- |
| LCP (Largest Contentful Paint) | < 2.4s | Hero heading / profile image should load quickly. Consider converting `profile-image.png` to WebP/AVIF. |
| FID / INP (Interaction) | < 100ms | Minimal JS on first interaction; heavy logic deferred. |
| CLS (Cumulative Layout Shift) | < 0.03 | Width/height attributes for images to avoid shifts. |
| Total JS (uncompressed) | < 45KB | Current `script.min.js` well below; keep future additions modular. |
| Total Images (initial) | < 300KB | Above-the-fold assets only; convert PNG/SVG to optimized formats. |
| First Byte (TTFB) | < 0.8s | Hosting/CDN dependent. |

### Budget Enforcement Checklist
- [x] Inline critical CSS
- [x] Defer non-critical scripts (`defer`, `requestIdleCallback`)
- [x] Lazy load offscreen images
- [ ] Convert PNG hero/profile to WebP or AVIF
- [ ] Add `<picture>` sources for modern formats
- [x] Use `font-display: swap` to avoid FOIT
- [x] Preconnect to font origins
- [ ] Periodic Lighthouse audits (monthly)

### Suggested Next Optimizations
1. Generate WebP/AVIF variants for all PNG project cards and hero image.
2. Add `<picture>` wrappers with fallback `<img>` for cross-browser support.
3. Consider self-hosting fonts to reduce DNS + SSL negotiation.
4. Split JS into smaller modules if new features exceed JS budget.
5. Add a lightweight service worker for asset caching (optional).

### How to Measure
Run a Lighthouse report (Chrome DevTools) or use:
```bash
# Mac / Linux
google-chrome --headless --disable-gpu --crash-test https://www.abhishekyadav.me
```
Or use WebPageTest.org / PageSpeed Insights for broader network simulation.

## 🔍 Monitoring Commands (Optional)
```bash
# Count JS file size
wc -c script.min.js

# Estimate gzip size (Mac/Linux)
gzip -c script.min.js | wc -c

# List image dimensions for quick audit (requires ImageMagick)
identify -format "%f %wx%h\n" assets/project/*.png
```

---

## 🖼️ Modern image formats (WebP/AVIF)

You can safely drop in modern formats without breaking the site. The hero image is already wrapped in a `<picture>` with commented placeholders in `index.html`. When you generate new assets, just uncomment the sources:

```html
<picture>
   <source srcset="assets/profile-image.avif" type="image/avif" />
   <source srcset="assets/profile-image.webp" type="image/webp" />
   <img src="assets/profile-image.png" alt="Abhishek Yadav - Software Developer" width="220" height="220" />
   <!-- PNG remains as a reliable fallback -->
   <!-- Keep width/height to preserve aspect ratio and reduce CLS -->
   <!-- `decoding=async` and `fetchpriority=high` are already included in HTML -->
   <!-- Consider also preloading the AVIF/WebP once available -->
   <!-- <link rel="preload" as="image" href="assets/profile-image.avif" imagesrcset="assets/profile-image.avif" /> -->
   <!-- <link rel="preload" as="image" href="assets/profile-image.webp" imagesrcset="assets/profile-image.webp" /> -->
</picture>
```

### Convert images on Windows (PowerShell)

Option A: Using ImageMagick (install from imagemagick.org)

```powershell
# Convert PNG to WebP
magick assets/profile-image.png -quality 82 assets/profile-image.webp

# Convert PNG to AVIF (requires ImageMagick built with libheif)
magick assets/profile-image.png -quality 45 assets/profile-image.avif
```

Option B: Using Google WebP tools + libavif encoders

```powershell
# WebP (cwebp): https://developers.google.com/speed/webp/docs/precompiled
cwebp assets/profile-image.png -q 82 -o assets/profile-image.webp

# AVIF (avifenc): https://github.com/AOMediaCodec/libavif/releases
avifenc --min 25 --max 45 --speed 6 assets/profile-image.png assets/profile-image.avif
```

Batch convert project images (adjust paths/extensions as needed):

```powershell
# WebP all PNGs in assets/project
Get-ChildItem assets/project -Filter *.png | ForEach-Object {
   $out = $_.FullName -replace ".png$", ".webp"; cwebp $_.FullName -q 82 -o $out
}

# AVIF all PNGs in assets/project
Get-ChildItem assets/project -Filter *.png | ForEach-Object {
   $out = $_.FullName -replace ".png$", ".avif"; avifenc --min 25 --max 45 --speed 6 $_.FullName $out
}
```

Tip: Keep the PNG fallback until you verify quality and browser coverage. AVIF first, WebP second, PNG last.

## 📊 **Browser Support**

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers

## 🤝 **Contributing**

While this is a personal portfolio, I welcome:
- 🐛 Bug reports
- 💡 Feature suggestions
- 🔧 Performance improvements
- 📚 Documentation updates

## 📞 **Contact**

**Abhishek Yadav**
- 📧 Email: [abhish3kkyadav@gmail.com](mailto:abhish3kkyadav@gmail.com)
- 💼 LinkedIn: [Abhishek Yadav](https://www.linkedin.com/in/abhishek-yadav-54974a333)
- 🐱 GitHub: [@Abhish3k-Yadav](https://github.com/Abhish3k-Yadav)

## 🎉 **Acknowledgments**

- **Font Awesome** - For the beautiful icons
- **Google Fonts** - For the Raleway font family
- **EmailJS** - For the email service integration
- **GitHub** - For hosting and version control

---

**Made with ❤️ by Abhishek **

*Building digital products, brands, and experiences.*
