# Northstar Workspace Landing Page

A polished, responsive landing page and sign-in experience built with HTML, CSS, and JavaScript. The site combines a premium hero section, product highlights, and an interactive client portal login panel.

## 📋 Features

✨ **Modern Design**
- Premium editorial-style hero layout
- Responsive glassmorphism-inspired interface
- Warm branded color system and layered backgrounds
- Smooth transitions and lightweight motion

🔐 **Portal Experience**
- Email and password input fields
- Password visibility toggle
- Role selection dropdown
- Remember me preference
- Password recovery and invite request flows

🎨 **Interactive Elements**
- Social sign-in buttons
- Client-side form validation
- Success, error, and info toast notifications
- Loading state on submit
- Keyboard shortcut support

♿ **Accessibility**
- WCAG compliant
- Semantic HTML
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

📱 **Responsive**
- Desktop layout (1024px+)
- Tablet layout (640px - 1024px)
- Mobile layout (<640px)

🚀 **Deployment**
- GitHub Pages integration
- CI/CD pipeline with GitHub Actions
- Automated validation

## 🚀 Quick Start

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/shrutiawasthi31/my-page.git
cd my-page
```

2. Open in browser:
```bash
# Option 1: Direct file
open index.html

# Option 2: Local server
python -m http.server 8000
# or
npx http-server
```

Visit `http://localhost:8000` (or your server port)

### GitHub Pages Deployment

1. Go to repository **Settings → Pages**
2. Select **"Deploy from a branch"**
3. Choose **"main"** branch and **"/root"** directory
4. Click **Save**

Your site will be live at:
```
https://shrutiawasthi31.github.io/my-page/
```

## 📝 Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page and login markup |
| `styles.css` | Styling & responsive design |
| `script.js` | Form functionality & interactions |
| `.github/workflows/ci.yml` | CI/CD pipeline configuration |
| `README.md` | Project documentation |

## 🔄 CI/CD Pipeline

The GitHub Actions workflow runs automatically on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

**Pipeline Stages:**
1. **Validate** - Code validation & linting
2. **Accessibility** - WCAG compliance checks
3. **Deploy** - Deploy to GitHub Pages (main/develop only)
4. **Notify** - Send deployment status

## 🎨 Customization

### Change Colors
Edit `.root` variables in `styles.css`:
```css
:root {
    --primary-color: #b8860b;      /* Golden */
    --primary-dark: #8b6808;
    /* ... modify other colors ... */
}
```

### Update Branding
- Change the product name and copy in `index.html`
- Edit colors in `:root` inside `styles.css`
- Replace placeholder social actions in `script.js`
- Connect the form submit flow to your real backend or dashboard

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile | ✅ All modern |

## ♿ Accessibility

- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Color contrast compliant
- ✅ Semantic HTML structure
- ✅ ARIA labels included
- ✅ Reduced motion support

## 📊 Performance

- **Load Time**: Fast static delivery
- **Dependencies**: Zero frameworks
- **Bundle Size**: Lightweight static assets only
- **Deployment**: Works well with GitHub Pages

## 🔒 Security Notes

⚠️ **Frontend Only**: This is a presentation layer only.

For production authentication:
1. Use a proper backend API
2. Implement OAuth 2.0 / OpenID Connect
3. Never store sensitive data in localStorage
4. Always use HTTPS
5. Implement CSRF protection
6. Validate on backend

## 🐛 Troubleshooting

### Site not loading
- Check GitHub Pages settings
- Verify branch is set to `main`
- Clear browser cache

### Styling looks wrong
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Check browser console for CSS errors

### Form not working
- Open browser console (F12)
- Check for JavaScript errors
- Verify all form fields have IDs

### Deployment failing
- Check Actions tab for error logs
- Review CI/CD workflow output
- Verify `.github/workflows/ci.yml` exists

## 📞 Support

- 📧 Email: shrutiawasthi202@gmail.com
- 🐙 GitHub: [shrutiawasthi31](https://github.com/shrutiawasthi31)
- 📝 Issues: [Report an issue](https://github.com/shrutiawasthi31/my-page/issues)

## 📄 License

MIT License - Free for personal and commercial use

## 🎉 Credits

Created with ❤️ by [Shruti Awasthi](https://github.com/shrutiawasthi31)

---

**Last Updated:** 2026-06-11  
**Version:** 2.0.0
