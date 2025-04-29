import { Cake, Testimonial, TeamMember, Milestone, Service } from '@/types';

export const cakes: Cake[] = [
  {
    id: '1',
    name: 'Classic Vanilla Dream',
    description: 'A timeless three-layer vanilla cake with buttercream frosting and edible flowers. Perfect for weddings and special celebrations.',
    price: 65,
    imageUrl: '/images/cakes/vanilla-dream.jpg',
    category: 'wedding'
  },
  {
    id: '2',
    name: 'Chocolate Decadence',
    description: 'Rich chocolate cake with ganache filling, chocolate buttercream, and chocolate shards. A chocolate lover\'s dream!',
    price: 55,
    imageUrl: '/images/cakes/chocolate-decadence.jpg',
    category: 'birthday'
  },
  {
    id: '3',
    name: 'Berry Bliss',
    description: 'Light sponge cake layered with fresh seasonal berries and whipped cream. Topped with a berry compote.',
    price: 60,
    imageUrl: '/images/cakes/berry-bliss.jpg',
    category: 'seasonal'
  },
  {
    id: '4',
    name: 'Lemon Sunshine',
    description: 'Zesty lemon cake with lemon curd filling and cream cheese frosting. Decorated with candied lemon slices.',
    price: 50,
    imageUrl: '/images/cakes/lemon-sunshine.jpg',
    category: 'specialty'
  },
  {
    id: '5',
    name: 'Caramel Drizzle',
    description: 'Moist caramel cake with salted caramel filling, vanilla buttercream, and a dramatic caramel drip.',
    price: 58,
    imageUrl: '/images/cakes/caramel-drizzle.jpg',
    category: 'birthday'
  },
  {
    id: '6',
    name: 'Red Velvet Romance',
    description: 'Classic red velvet cake with cream cheese frosting. Elegant and timeless for any celebration.',
    price: 62,
    imageUrl: '/images/cakes/red-velvet.jpg',
    category: 'wedding'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    quote: 'The wedding cake exceeded all our expectations! Not only was it stunning to look at, but it tasted incredible. Our guests are still talking about it months later!',
    photoUrl: '/images/testimonials/sarah.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    quote: 'I ordered a birthday cake for my daughter and she was thrilled! The attention to detail was amazing and the flavor was perfect - not too sweet and incredibly moist.',
    photoUrl: '/images/testimonials/michael.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    quote: 'As someone with dietary restrictions, finding delicious cakes can be challenging. The team created a gluten-free option that was better than any regular cake I\'ve had!',
    photoUrl: '/images/testimonials/emily.jpg',
    rating: 4
  },
  {
    id: '4',
    name: 'David Thompson',
    quote: 'The custom design for my wife\'s 40th birthday cake was spectacular. The cake artist captured her personality perfectly, and the taste was divine.',
    photoUrl: '/images/testimonials/david.jpg',
    rating: 5
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Claire Wilson',
    role: 'Head Baker & Founder',
    bio: 'With 15 years of experience in fine pastry, Claire founded Artisan Cake Shop with a vision to create edible art that tastes as good as it looks. Trained in Paris, she brings European techniques with local flavors.',
    photoUrl: '/images/team/claire.jpg'
  },
  {
    id: '2',
    name: 'Marcus Lee',
    role: 'Cake Designer',
    bio: 'Marcus specializes in sculptural and architectural cake designs. His background in fine arts gives him a unique perspective on cake as a medium for creative expression.',
    photoUrl: '/images/team/marcus.jpg'
  },
  {
    id: '3',
    name: 'Sophia Patel',
    role: 'Pastry Chef',
    bio: 'Sophia is our flavor expert, constantly developing new and exciting taste combinations. She ensures that every cake is as delicious as it is beautiful.',
    photoUrl: '/images/team/sophia.jpg'
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
    imageUrl: '/images/services/custom-cakes.jpg',
    price: 'Starting at $55'
  },
  {
    id: '2',
    title: 'Wedding Cakes',
    description: 'Elegant, show-stopping wedding cakes designed to match your theme and style. Includes consultation, tasting session, and delivery to your venue.',
    imageUrl: '/images/services/wedding-cakes.jpg',
    price: 'Starting at $350'
  },
  {
    id: '3',
    title: 'Cupcake Towers',
    description: 'Beautiful arrangements of cupcakes in various flavors, perfect for events where individual servings are preferred. Can be combined with a small cutting cake for the top tier.',
    imageUrl: '/images/services/cupcake-towers.jpg',
    price: 'Starting at $3 per cupcake'
  },
  {
    id: '4',
    title: 'Dessert Tables',
    description: 'Complete dessert experiences featuring a variety of treats including mini cakes, tarts, cookies, and more. Styled to complement your event.',
    imageUrl: '/images/services/dessert-tables.jpg',
    price: 'Starting at $250'
  },
  {
    id: '5',
    title: 'Cake Decorating Classes',
    description: 'Learn the art of cake decorating in our workshop. Classes available for beginners to advanced decorators, covering techniques from basic piping to sugar flowers.',
    imageUrl: '/images/services/cake-classes.jpg',
    price: '$75 per person'
  }
];