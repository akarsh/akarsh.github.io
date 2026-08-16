# Project Guidelines

## Project Overview
Personal portfolio and resume website repository with multiple site versions and multi-language support. Contains the current portfolio site, legacy website versions, and resume-specific layouts.

## Code Style
- **HTML**: Semantic markup with accessibility considerations
- **CSS**: Organized in `/css/` folder; follows consistent naming conventions
- **JavaScript**: Plain JavaScript and jQuery (primarily in legacy versions)
- **JSON**: Resume data in `/json/` organized by language codes (`en/`, `de/`)

## Architecture
- **Current site**: Root-level `index.html` with supporting CSS and JavaScript in `/css/` and as `index.js`
- **Legacy versions**: `/old-website/` contains previous website iterations with assets and styling
- **Resume variations**: 
  - `/resume-website/` - standalone resume site with bundled assets
  - `/resumes/` - raw resume files
- **Logo/branding**: `/logo-website/` for logo variations and brand assets

## Build and Test
- No build process required—static HTML/CSS/JS site
- Test locally by opening `index.html` in a browser
- Multi-language resume data stored as JSON in `/json/` (separate `en/` and `de/` directories)
- Verify all JSON files are valid before deployment

## Conventions
- **Multi-language support**: Use language codes (en, de) in file paths
- **Legacy preservation**: Keep old versions in `/old-website/` for reference and historical context
- **Separation of concerns**: Resume data maintained separately from presentation (JSON data in `/json/`, HTML renderers in `/resume-website/`)
- **Image assets**: Store images in `/images/` directories at root and within site-specific folders
