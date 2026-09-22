# Roast & Ritual — Coffee Landing Page

A polished, responsive coffee-shop landing page built with semantic HTML, custom CSS, and vanilla JavaScript. The page presents **Roast & Ritual**, a fictional neighborhood coffee shop, with animated interactions, menu highlights, and an interactive brew-bar playground.

## ✨ Features

- Responsive coffee-shop landing page for desktop and mobile screens
- Hero section with animated visual elements and calls to action
- Story, menu, bakery, and visit sections
- Interactive roast-intensity slider and “Brew my cup” animation
- GSAP-powered entrance, scroll, hover, and ambient animations
- Reduced-motion support through `prefers-reduced-motion`
- Custom typography loaded from Google Fonts
- Additional HTML/CSS practice pages and JavaScript exercises

## 🛠️ Built With

- **HTML5** — page structure and semantic content
- **CSS3** — responsive layout, design system, and animations
- **JavaScript** — interactions and animation control
- **GSAP** — motion effects and ScrollTrigger animations
- **Google Fonts** — Manrope and DM Mono

## 📁 Project Structure

```text
.
├── index.html          # Main Roast & Ritual landing page
├── styles.css          # Global layout and visual styles
├── coffee.css          # Coffee-themed component styles
├── script.js           # GSAP animations and playground interactions
├── 1assi.html          # HTML practice exercise
├── 2assi.html          # HTML practice exercise
├── 3assi.html          # HTML practice exercise
├── 4assi.html           # HTML practice exercise
├── 4style.css           # Styles for exercise 4
├── 5assi.html           # HTML practice exercise
├── 5style.css           # Styles for exercise 5
├── 6assi.html           # HTML practice exercise
├── 6assi.css            # Styles for exercise 6
├── 7assi.html           # HTML practice exercise
├── 7assi.css            # Styles for exercise 7
├── 8assi.html           # HTML practice exercise
├── 8assi.css            # Styles for exercise 8
├── 9assi.html           # HTML practice exercise
├── 9assi.css            # Styles for exercise 9
├── 10assi.html          # HTML practice exercise
├── 10assi.css           # Styles for exercise 10
├── 11assi.html          # HTML practice exercise
├── 11assi.css           # Styles for exercise 11
├── 12assi.html          # HTML practice exercise
├── 12assi.css           # Styles for exercise 12
├── 13assi.html          # HTML practice exercise
├── Mini project.js      # JavaScript mini-project practice
└── assingment/          # Additional assignment work
```

## 🚀 Run Locally

This is a static front-end project, so no package installation or build step is required.

### Option 1: Open directly

1. Clone the repository:

   ```bash
   git clone https://github.com/arjunkumar20-kd/leaning-phase.git
   cd leaning-phase
   ```

2. Open `index.html` in a modern browser.

### Option 2: Use a local development server

For the best experience, serve the project locally with an editor extension such as **Live Server**, or use any static HTTP server:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## 🎛️ Interactive Demo

In the **Find your cup** section:

1. Adjust the **Roast intensity** slider.
2. Click **Brew my cup**.
3. Watch the brew-bar visual respond to your selection.

GSAP and ScrollTrigger are loaded from jsDelivr in `index.html`, so an internet connection is required for the animations unless those dependencies are hosted locally.

## ♿ Accessibility

The project includes semantic sections, accessible labels for controls, descriptive navigation labels, and a reduced-motion fallback for visitors who have enabled `prefers-reduced-motion` in their operating system.

## 📄 License

This project is intended for learning and portfolio practice. Add a license if you plan to distribute or reuse the code publicly.
