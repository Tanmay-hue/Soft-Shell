# SoftSell Marketing Website

A responsive, single-page marketing website for a fictional software resale startup called 'SoftSell'.

## Features Implemented

- **Hero Section**: Eye-catching headline, subheading, and dual CTA buttons
- **How It Works**: Three-step process with icons and descriptions
- **Why Choose Us**: Four key benefits with icons and descriptions
- **Customer Testimonials**: Two customer reviews with quotes
- **Contact Form**: Form with validation for name, email, company, and license type
- **Responsive Design**: Fully responsive layout for all screen sizes
- **Navigation**: Smooth scrolling navigation with mobile-friendly menu

## Design Choices

- **Color Scheme**: Blue and indigo gradient for the hero section with white and light gray backgrounds for content sections to create visual separation
- **Typography**: Clean, readable font (Inter) for optimal readability
- **Icons**: Used Lucide React icons for a consistent and modern look
- **Layout**: Card-based layout for easy scanning of information
- **Form Validation**: Client-side validation for required fields with clear error messages
- **Mobile Navigation**: Hamburger menu for mobile devices with smooth transitions

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Deployment Instructions

### Setting up GitHub Pages with Next.js

1. Install the required package:
   \`\`\`
   npm install --save-dev gh-pages
   \`\`\`

2. Add the following scripts to your package.json:
   \`\`\`json
   "scripts": {
     "build": "next build",
     "export": "next export",
     "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out -t true"
   }
   \`\`\`

3. Create a next.config.js file with the following content:
   \`\`\`js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     assetPrefix: './',
   }
   
   module.exports = nextConfig
   \`\`\`

4. Run the deploy command:
   \`\`\`
   npm run deploy
   \`\`\`

5. Configure GitHub Pages in your repository settings to use the gh-pages branch.

## Time Spent

Approximately 8 hours:
- Planning and design: 1 hour
- Setting up the project: 0.5 hours
- Building components: 5 hours
- Testing and responsive adjustments: 1 hour
- Documentation: 0.5 hours
