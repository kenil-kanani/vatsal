/**
 * Centralized image URL management
 * 
 * This file contains all image URLs used across the website.
 * Using this approach allows for:
 * 1. Easy switching between local and remote images
 * 2. Consistent image URL management
 * 3. Simple updates when image locations change
 */

// Base URL for remote images (change this to your CDN or image hosting service)
export const IMAGE_BASE_URL = 'http://localhost:3000/images';

export const HERO_BACKGROUND_URL = `${IMAGE_BASE_URL}/hero-background.png}`

// Cake Images
export const CAKE_IMAGES = {
  vanillaDream: `${IMAGE_BASE_URL}/cakes/vanilla-dream.png`,
  chocolateDecadence: `${IMAGE_BASE_URL}/cakes/chocolate-decadence.png`,
  berryBliss: `${IMAGE_BASE_URL}/cakes/berry-bliss.png`,
  lemonSunshine: `${IMAGE_BASE_URL}/cakes/lemon-sunshine.png`,
  caramelDrizzle: `${IMAGE_BASE_URL}/cakes/caramel-drizzle.png`,
  redVelvet: `${IMAGE_BASE_URL}/cakes/red-velvet.png`,
};

// Testimonial Images
export const TESTIMONIAL_IMAGES = {
  sarah: `${IMAGE_BASE_URL}/testimonials/sarah.jpg`,
  michael: `${IMAGE_BASE_URL}/testimonials/michael.jpg`,
  emily: `${IMAGE_BASE_URL}/testimonials/emily.jpg`,
  david: `${IMAGE_BASE_URL}/testimonials/david.jpg`,
};

// Team Member Images
export const TEAM_IMAGES = {
  claire: `${IMAGE_BASE_URL}/team/claire.jpg`,
  marcus: `${IMAGE_BASE_URL}/team/marcus.jpg`,
  sophia: `${IMAGE_BASE_URL}/team/sophia.jpg`,
};

// Service Images
export const SERVICE_IMAGES = {
  customCakes: `${IMAGE_BASE_URL}/services/custom-cakes.png`,
  weddingCakes: `${IMAGE_BASE_URL}/services/wedding-cakes.png`,
  cupcakeTowers: `${IMAGE_BASE_URL}/services/cupcake-towers.jpg`,
  dessertTables: `${IMAGE_BASE_URL}/services/dessert-tables.jpg`,
  cakeClasses: `${IMAGE_BASE_URL}/services/cake-classes.jpg`,
};

// Function to get image URL (useful for dynamic image paths)
export function getImageUrl(category: string, imageName: string): string {
  return `${IMAGE_BASE_URL}/${category}/${imageName}`;
}