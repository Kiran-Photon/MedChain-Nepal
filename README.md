# MedChain Nepal — Solana Medicine Tracker

A blockchain-based medicine verification system built on Solana with complete supply chain transparency.

## 📂 Project Structure

```
medchain-project/
├── index.html                    # Home page (main entry point)
├── css/
│   └── style.css                # Shared styles for all pages
├── js/
│   ├── main.js                  # Shared functionality (nav, wallet connection)
│   └── medicine.js              # Medicine tracking logic
├── pages/
│   ├── tracker.html             # Medicine tracking page
│   └── about.html               # About page
└── README.md                    # This file
```

## 🚀 Getting Started

### Open in Browser
1. **Direct Open**: Simply open `index.html` in your web browser
2. **Live Server** (Recommended): 
   - Install the "Live Server" extension in VS Code
   - Right-click `index.html` → "Open with Live Server"
   - Opens at `http://localhost:5500`

### File Linking Guide

**From root pages to CSS/JS:**
```html
<link rel="stylesheet" href="css/style.css"/>
<script src="js/main.js"></script>
```

**From pages/ folder to CSS/JS:**
```html
<link rel="stylesheet" href="../css/style.css"/>
<script src="../js/main.js"></script>
```

**Navigation between pages:**
```html
<!-- From root (index.html) -->
<a href="pages/tracker.html">Track Medicine</a>
<a href="pages/about.html">About</a>

<!-- From pages/ (tracker.html) -->
<a href="../index.html">Home</a>
<a href="about.html">About</a>
```

## 📄 File Descriptions

### **index.html** (Home Page)
- Main landing page
- Features overview
- Statistics display
- Call-to-action button

### **pages/tracker.html** (Medicine Tracker)
- Medicine search functionality
- Supply chain visualization
- Solana blockchain verification
- Sample IDs: MCN-1001, MCN-2042, MCN-3041, MCN-4099

### **pages/about.html** (About Page)
- Project mission
- How it works
- Technology stack
- Links to other pages

### **css/style.css** (Shared Styles)
- Global variables (colors, fonts)
- Navigation styling
- Component styles (cards, buttons, etc.)
- Responsive design

### **js/main.js** (Shared JavaScript)
- Navigation active state handling
- Solana wallet connection
- Initialization code

### **js/medicine.js** (Medicine Tracking)
- Medicine database
- Search and filtering
- Blockchain verification display
- Supply chain rendering

## 🔗 Navigation Flow

```
index.html (Home)
├── pages/tracker.html (Track Medicine)
└── pages/about.html (About)
```

All pages link back to each other via navigation menu.

## 🎨 Styling

The project uses:
- **Colors**: Green Solana theme with blue accents
- **Fonts**: Syne (display), Manrope (body), JetBrains Mono (code)
- **Components**: Cards, buttons, search box, stats display

## 🧪 Sample Medicine IDs

Try these IDs on the tracker page:
- **MCN-1001**: Amoxicillin 500mg (Verified Safe)
- **MCN-2042**: Paracetamol 650mg (Expired)
- **MCN-3041**: Cetirizine 10mg (Counterfeit)
- **MCN-4099**: Metformin 500mg (Verified Safe)

## 🔐 Features

✅ Solana blockchain integration  
✅ Medicine supply chain tracking  
✅ Wallet connection (mock)  
✅ Multi-page navigation  
✅ Responsive design  
✅ IPFS integration references  

## 💡 Tips

1. **Adding New Pages**: 
   - Create new HTML file in `pages/` folder
   - Include `<link rel="stylesheet" href="../css/style.css"/>`
   - Include `<script src="../js/main.js"></script>`
   - Use consistent navigation menu

2. **Updating Styles**:
   - Edit `css/style.css` - affects all pages automatically
   - CSS variables defined in `:root` for easy theming

3. **Extending Functionality**:
   - Add new functions to `js/main.js` for shared code
   - Add page-specific code to separate JS files like `js/medicine.js`

## 📱 Responsive Design

The design is mobile-friendly with breakpoints at 480px:
- Navigation adjusts to stack vertically
- Grid layouts adapt to single column
- All text is readable on mobile

## 🔄 Easy Updates

Since each page links to the same CSS/JS files:
- Update `css/style.css` → affects all pages
- Update `js/main.js` → affects all pages
- No need to copy/paste code across files

---

**Ready to use!** Open `index.html` in your browser to get started.
