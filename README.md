# Artisan Cake Shop

A Next.js website for an artisan cake shop, featuring animated UI elements and a responsive design.

## Features

- Responsive design with mobile-first approach
- Interactive animations using Framer Motion
- Lottie animations for engaging visual elements
- Masonry grid gallery with lightbox
- Contact form with validation
- Animated page transitions

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lottie React
- React Intersection Observer
- React Masonry CSS

## Project Structure

```
├── public/
│   ├── images/
│   │   ├── cakes/
│   │   ├── team/
│   │   ├── testimonials/
│   │   └── services/
│   └── lottie/
│       └── cake-frosting.json
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── services/
│   │   ├── gallery/
│   │   ├── contact/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── gallery/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── services/
│   │   └── ui/
│   ├── lib/
│   │   └── data.ts
│   └── types/
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/artisan-cake-shop.git
cd artisan-cake-shop
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Image Assets

For a complete implementation, you'll need to add your own images to the following directories:

- `/public/images/cakes/` - Images of cakes for the gallery and featured sections
- `/public/images/team/` - Photos of team members
- `/public/images/testimonials/` - Photos of customers for testimonials
- `/public/images/services/` - Images for the services section

## Lottie Animations

The project includes a sample Lottie animation for the cake frosting in the hero section. For production, you may want to replace it with a more detailed animation.

## Customization

- Colors: Edit the CSS variables in `src/app/globals.css`
- Content: Update the sample data in `src/lib/data.ts`
- Fonts: Change the font imports in `src/app/layout.tsx`

## License

This project is licensed under the MIT License.
