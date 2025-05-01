import { Cake, Testimonial, TeamMember, Milestone, Service } from '@/types';
import { CAKE_IMAGES, TESTIMONIAL_IMAGES, TEAM_IMAGES, SERVICE_IMAGES } from './imageUrls';

export const cakes: Cake[] = [
  {
    id: '1',
    name: 'Classic Vanilla Dream',
    description: 'A timeless three-layer vanilla cake with buttercream frosting and edible flowers. Perfect for weddings and special celebrations.',
    price: 65,
    imageUrl: CAKE_IMAGES.vanillaDream,
    category: 'wedding'
  },
  {
    id: '2',
    name: 'Chocolate Decadence',
    description: 'Rich chocolate cake with ganache filling, chocolate buttercream, and chocolate shards. A chocolate lover\'s dream!',
    price: 55,
    imageUrl: CAKE_IMAGES.chocolateDecadence,
    category: 'birthday'
  },
  {
    id: '3',
    name: 'Berry Bliss',
    description: 'Light sponge cake layered with fresh seasonal berries and whipped cream. Topped with a berry compote.',
    price: 60,
    imageUrl: CAKE_IMAGES.berryBliss,
    category: 'seasonal'
  },
  {
    id: '4',
    name: 'Lemon Sunshine',
    description: 'Zesty lemon cake with lemon curd filling and cream cheese frosting. Decorated with candied lemon slices.',
    price: 50,
    imageUrl: CAKE_IMAGES.lemonSunshine,
    category: 'specialty'
  },
  {
    id: '5',
    name: 'Caramel Drizzle',
    description: 'Moist caramel cake with salted caramel filling, vanilla buttercream, and a dramatic caramel drip.',
    price: 58,
    imageUrl: CAKE_IMAGES.caramelDrizzle,
    category: 'birthday'
  },
  {
    id: '6',
    name: 'Red Velvet Romance',
    description: 'Classic red velvet cake with cream cheese frosting. Elegant and timeless for any celebration.',
    price: 62,
    imageUrl: CAKE_IMAGES.redVelvet,
    category: 'wedding'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    quote: 'The wedding cake exceeded all our expectations! Not only was it stunning to look at, but it tasted incredible. Our guests are still talking about it months later!',
    photoUrl: TESTIMONIAL_IMAGES.sarah,
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    quote: 'I ordered a birthday cake for my daughter and she was thrilled! The attention to detail was amazing and the flavor was perfect - not too sweet and incredibly moist.',
    photoUrl: TESTIMONIAL_IMAGES.michael,
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    quote: 'As someone with dietary restrictions, finding delicious cakes can be challenging. The team created a gluten-free option that was better than any regular cake I\'ve had!',
    photoUrl: TESTIMONIAL_IMAGES.emily,
    rating: 4
  },
  {
    id: '4',
    name: 'David Thompson',
    quote: 'The custom design for my wife\'s 40th birthday cake was spectacular. The cake artist captured her personality perfectly, and the taste was divine.',
    photoUrl: TESTIMONIAL_IMAGES.david,
    rating: 5
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Kailash Shah',
    role: 'Head Baker & Founder',
    bio: 'With 10 years of experience in fine pastry, Claire founded Artisan Cake Shop with a vision to create edible art that tastes as good as it looks. Trained in Paris, she brings European techniques with local flavors.',
    photoUrl: TEAM_IMAGES.claire
  }
];

export const milestones: Milestone[] = [
  {
    id: '1',
    year: 2015,
    title: 'Humble Beginnings',
    description: 'Started as a home-based bakery, creating cakes for friends and family.'
  },
  {
    id: '2',
    year: 2017,
    title: 'First Storefront',
    description: 'Opened our first small shop in the heart of downtown.'
  },
  {
    id: '3',
    year: 2019,
    title: 'Award-Winning Designs',
    description: 'Won "Best Wedding Cake Designer" in the Regional Bakery Awards.'
  },
  {
    id: '4',
    year: 2021,
    title: 'Expanded Kitchen',
    description: 'Moved to a larger location with a dedicated workshop space for classes and events.'
  },
  {
    id: '5',
    year: 2023,
    title: 'National Recognition',
    description: 'Featured in "Baking Today" magazine as one of the top artisan bakeries in the country.'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Celebration Cakes',
    description: 'Personalized cakes for birthdays, anniversaries, and special occasions. Each cake is designed specifically for your event, with your choice of flavors, fillings, and decorative elements.',
    imageUrl: SERVICE_IMAGES.customCakes,
    price: 'Starting at ₹4,500'
  },
  {
    id: '2',
    title: 'Wedding Cakes',
    description: 'Elegant, show-stopping wedding cakes designed to match your theme and style. Includes consultation, tasting session, and delivery to your venue.',
    imageUrl: SERVICE_IMAGES.weddingCakes,
    price: 'Starting at ₹25,000'
  }
];