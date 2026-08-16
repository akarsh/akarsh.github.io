# Akarsh Seggemu — Portfolio

Personal portfolio and résumé website for Akarsh Seggemu, an IT Technical Team Lead and software engineer.

The current site is a responsive, accessible static website hosted with GitHub Pages. It presents Akarsh's background, experience, selected projects, résumé downloads, and contact links.

## Features

- Responsive Bootstrap 5 layout
- Sticky navigation with mobile collapse
- Light and dark color modes
- Theme preference saved in `localStorage`
- About and career-highlight sections
- Experience timeline and English/German résumé downloads
- Responsive project-card grid
- Accessible labels, focus states, and reduced-motion support
- Dynamic copyright year
- No build process or jQuery dependency

## Technology

- Semantic HTML5
- CSS3 and Bootstrap 5.3.8
- Plain JavaScript
- Font Awesome 5.15.4
- GitHub Pages

Bootstrap and Font Awesome are loaded from CDNs. Bootstrap resources use Subresource Integrity where available.

## Project structure

```text
.
├── index.html              # Current portfolio page
├── index.js                # Theme and navigation behavior
├── css/style.css           # Custom responsive styles
├── images/                 # Current profile images
├── resumes/                # Downloadable résumé PDFs
├── json/
│   ├── en/resume.json      # English résumé data
│   └── de/resume.json      # German résumé data
├── resume-website/         # Standalone résumé-site version
├── old-website/            # Archived website versions
└── logo-website/           # Logo and branding experiments
```

## Run locally

No installation or compilation is required. Start a local static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

Using a local server is recommended because it matches GitHub Pages behavior more closely than opening `index.html` through a `file://` URL.

## Verification

After making changes:

1. Test the site at mobile, tablet, and desktop widths.
2. Verify that the responsive navigation opens, closes, and follows section links.
3. Test the light/dark theme toggle and reload the page to confirm persistence.
4. Confirm that both résumé downloads and external project links work.
5. Check the browser console for errors.
6. Validate the résumé JSON files if they were modified.

JavaScript syntax can be checked with:

```bash
node --check index.js
```

## Accessibility

The current site includes semantic landmarks, descriptive alternative text, labeled controls and social links, keyboard-visible focus states, and reduced-motion handling. Accessibility should be rechecked whenever navigation, colors, or interactive elements change.

## License

See [LICENSE](LICENSE).
