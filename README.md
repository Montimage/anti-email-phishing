# Anti-Phishing Email Service Website

This is the website component for the Anti-Phishing Email Service, providing information about the project, its features, and installation instructions.

## Technologies Used

- **React 19**: For building the user interface
- **Vite**: As the build tool and development server
- **Tailwind CSS**: For styling components

## Development

To start the development server:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Building

To build the website for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
/website
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Installation.jsx
│   │   └── Footer.jsx
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── tailwind.config.js # Tailwind configuration
└── vite.config.js    # Vite configuration
```

## Deployment

The website can be deployed to any static site hosting service, such as GitHub Pages, Netlify, or Vercel.
