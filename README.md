# Khushnood.dev — Portfolio

A responsive developer portfolio built with React, TypeScript, and Vite. The visual direction blends a profile-led introduction, compact sidebar navigation, and a filtered screenshot portfolio with an original layout and styling.

## Run locally

```bash
npm ci
npm run dev
```

Create a `.env.local` file in the project root for the EmailJS contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Keep the real values private; `.env.local` is ignored by Git. Without these values, the site still works, but the contact panel provides a direct email link.

## Production build

```bash
npm run build
```

Deploy the project to Vercel and add the same three EmailJS variables in the project’s Environment Variables settings.

## Project links and screenshots

- Spotify Clone, Airbnb Clone, and ShopHub link to their GitHub repositories instead of the former demo buttons.
- Their supplied screenshots are cropped to a consistent landscape format, lightly sharpened, optimized as WebP, and displayed in browser-frame compositions. Select a cover to browse each project’s screens.
- Use the project filters to switch between full-stack work and websites.
- Restaurant Website keeps its existing live URL; its source-code button is intentionally omitted.
- Law Firm Website links to the URL supplied for the portfolio.

The page includes a process timeline rather than invented job history, testimonials, or client claims.
