// Image utility functions using placehold.co

// Define cake colors based on category
const cakeColors: Record<string, string> = {
  'wedding': 'FFD1DC', // Light pink
  'birthday': 'B19CD9', // Light purple
  'seasonal': 'FFDB58', // Mustard yellow
  'specialty': 'ADD8E6', // Light blue
  'default': 'F5F5DC', // Beige
};

// Define service colors
const serviceColors: Record<string, string> = {
  'custom': 'FFB6C1', // Light pink
  'wedding': 'E6E6FA', // Lavender
  'cupcake': 'FFDAB9', // Peach
  'dessert': 'E0FFFF', // Light cyan
  'class': 'F0FFF0', // Honeydew
  'default': 'FFF0F5', // Lavender blush
};

/**
 * Get a cake image URL based on the cake type
 * @param cakeType The type of cake (e.g., 'wedding', 'birthday', etc.)
 * @param index Optional index to get different images for the same cake type
 * @returns URL to a placeholder image
 */
export function getCakeImageUrl(cakeType: string, index: number = 0): string {
  const category = cakeType.toLowerCase();
  const colorCode = cakeColors[category] || cakeColors['default'];
  const seed = Math.abs(index) % 100; // Ensure we have some variety
  
  // Return a placeholder image with the cake name
  return `https://placehold.co/800x600/${colorCode}/333333/png?text=Cake:+${category}+${seed}`;
}

/**
 * Get a team member image URL
 * @param gender Optional gender for the team member image ('male', 'female', or 'any')
 * @param index Optional index to get different images
 * @returns URL to a placeholder image
 */
export function getTeamMemberImageUrl(gender: 'male' | 'female' | 'any' = 'any', index: number = 0): string {
  const genderTerm = gender !== 'any' ? gender : 'person';
  const seed = Math.abs(index) % 100; // Ensure we have some variety
  
  // Return a placeholder image
  return `https://placehold.co/400x400/9370DB/FFFFFF/png?text=${genderTerm}+${seed}`;
}

/**
 * Get a service image URL
 * @param serviceType The type of service
 * @param index Optional index to get different images
 * @returns URL to a placeholder image
 */
export function getServiceImageUrl(serviceType: string, index: number = 0): string {
  const type = serviceType.toLowerCase();
  const colorCode = serviceColors[type] || serviceColors['default'];
  const seed = Math.abs(index) % 100; // Ensure we have some variety
  
  // Return a placeholder image
  return `https://placehold.co/800x600/${colorCode}/333333/png?text=Service:+${type}+${seed}`;
}

/**
 * Get a testimonial person image URL
 * @param index Optional index to get different images
 * @returns URL to a placeholder image
 */
export function getTestimonialImageUrl(index: number = 0): string {
  const seed = Math.abs(index) % 100; // Ensure we have some variety
  
  // Return a placeholder image
  return `https://placehold.co/300x300/87CEEB/FFFFFF/png?text=Testimonial+${seed}`;
}

/**
 * Get a hero background image URL
 * @returns URL to a placeholder image
 */
export function getHeroBackgroundUrl(): string {
  // Return a placeholder image for the hero background
  return 'https://placehold.co/1600x900/FFC0CB/333333/png?text=Shreeji+Cake';
}