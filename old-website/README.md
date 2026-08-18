# Legacy portfolio website

This is the preserved legacy version of Akarsh Seggemu's portfolio. It uses the HTML5 UP **Stellar** template and intentionally retains the original layout, visual design, animations, and content.

## Local testing

Serve the repository over HTTP from its root directory:

```sh
cd /Users/akarsh/Developer/akarsh.github.io
python3 -m http.server 8001
```

Then open <http://localhost:8001/old-website/index.html>.

Do not test by double-clicking an HTML file or opening a `file://` URL. Browsers isolate local files into separate security origins, which can prevent embedded PDFs and linked pages from loading even when the website code is correct.

Before publishing, check:

- The homepage animation completes and the page becomes interactive.
- The **More** menu opens with a mouse or keyboard, closes on outside click, and closes with <kbd>Esc</kbd>.
- Homepage section links scroll to the correct content.
- Links to Skills, Certifications, Conferences, and the other legacy pages load.
- `academicCV.html` displays the PDF and its download fallback works.
- The browser console has no JavaScript errors.
- The layout remains usable at desktop, tablet, and mobile widths.

Stop the server with <kbd>Ctrl</kbd>+<kbd>C</kbd>.

## Dependencies

- jQuery 3.7.1
- Font Awesome 4.6.3
- jQuery Scrollex 0.2.1
- jQuery Scrolly 1.0.0-dev
- Skel 3.0.1

The homepage dropdown is implemented by the site's own small JavaScript and CSS, so Bootstrap is no longer downloaded. Font Awesome, Scrollex, Scrolly, and Skel remain at the versions bundled with Stellar to preserve the original icons, responsive layout, and scrolling behavior.

## Performance and compatibility

- Large below-the-fold sample images are lazy-loaded and include intrinsic dimensions to reduce layout movement.
- The profile image is prioritized because it appears in the initial viewport.
- Connections to the Google Fonts origins are warmed up on the homepage.
- Scripts remain at the end of each page so they do not block the initial HTML rendering.
- Obsolete IE8/IE9 compatibility loaders have been removed.

The site-owned JavaScript uses current browser APIs and supports current Chrome, Edge, Firefox, and Safari releases.

## Credits

- Template: Stellar by [HTML5 UP](https://html5up.net/stellar), licensed under [CCA 3.0](https://html5up.net/license)
- Demo images: [Unsplash](https://unsplash.com)
- Icons: [Font Awesome](https://fontawesome.com)
- JavaScript: [jQuery](https://jquery.com), Scrollex by AJ, and [Skel](http://skel.io)
