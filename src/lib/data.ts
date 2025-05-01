import { Cake, Testimonial, TeamMember, Milestone, Service } from '@/types';
import { CAKE_IMAGES, TESTIMONIAL_IMAGES, TEAM_IMAGES, SERVICE_IMAGES } from './imageUrls';

export const cakes: Cake[] = [
  {
    id: '1',
    name: 'Kesar Pista Dream',
    description: 'A luxurious three-layer saffron cake with pistachio buttercream frosting and edible flowers. Perfect for weddings and special celebrations.',
    price: 1200,
    imageUrl: CAKE_IMAGES.vanillaDream,
    category: 'wedding'
  },
  {
    id: '2',
    name: 'Chocolate Decadence',
    description: 'Rich chocolate cake with ganache filling, chocolate buttercream, and chocolate shards. A chocolate lover\'s dream!',
    price: 950,
    imageUrl: CAKE_IMAGES.chocolateDecadence,
    category: 'birthday'
  },
  {
    id: '3',
    name: 'Mango Delight',
    description: 'Light sponge cake layered with fresh Alphonso mango cream and whipped cream. Topped with mango pieces. Seasonal favorite!',
    price: 1100,
    imageUrl: CAKE_IMAGES.berryBliss,
    category: 'seasonal'
  },
  {
    id: '4',
    name: 'Rasmalai Cake',
    description: 'Cardamom-infused cake with rasmalai filling and cream cheese frosting. Decorated with saffron strands and pistachios.',
    price: 1300,
    imageUrl: CAKE_IMAGES.lemonSunshine,
    category: 'specialty'
  },
  {
    id: '5',
    name: 'Butterscotch Bliss',
    description: 'Moist butterscotch cake with caramel filling, vanilla buttercream, and a dramatic caramel drip with crushed praline.',
    price: 1050,
    imageUrl: CAKE_IMAGES.caramelDrizzle,
    category: 'birthday'
  },
  {
    id: '6',
    name: 'Gulab Jamun Cake',
    description: 'Innovative fusion cake with gulab jamun pieces, rose-flavored cream, and cardamom frosting. Perfect for festivals and celebrations.',
    price: 1250,
    imageUrl: CAKE_IMAGES.redVelvet,
    category: 'wedding'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Patel',
    quote: 'The wedding cake exceeded all our expectations! Not only was it stunning to look at, but it tasted incredible. Our guests are still talking about it months later!',
    photoUrl: TESTIMONIAL_IMAGES.sarah,
    rating: 5
  },
  {
    id: '2',
    name: 'Raj Sharma',
    quote: 'I ordered a birthday cake for my daughter and she was thrilled! The attention to detail was amazing and the flavor was perfect - not too sweet and incredibly moist.',
    photoUrl: TESTIMONIAL_IMAGES.michael,
    rating: 5
  },
  {
    id: '3',
    name: 'Meera Desai',
    quote: 'As someone with dietary restrictions, finding delicious cakes can be challenging. The team created an eggless option that was better than any regular cake I\'ve had!',
    photoUrl: TESTIMONIAL_IMAGES.emily,
    rating: 4
  },
  {
    id: '4',
    name: 'Arjun Mehta',
    quote: 'The custom design for my wife\'s anniversary cake was spectacular. The cake artist captured her personality perfectly, and the taste was divine.',
    photoUrl: TESTIMONIAL_IMAGES.david,
    rating: 5
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Kailash Shah',
    role: 'Head Baker & Founder',
    bio: 'With 10 years of experience in fine pastry, Kailash founded Shreeji Cake with a vision to create edible art that tastes as good as it looks. Trained at the Institute of Baking and Culinary Arts in Mumbai, he combines traditional Gujarati flavors with modern cake designs.',
    photoUrl: TEAM_IMAGES.claire
  }
];

export const milestones: Milestone[] = [
  {
    id: '1',
    year: 2015,
    title: 'Humble Beginnings',
    description: 'Started as a home-based bakery in Bayad, creating cakes for friends and family.'
  },
  {
    id: '2',
    year: 2017,
    title: 'First Storefront',
    description: 'Opened our first small shop in Swaminarayan Society, Bayad.'
  },
  {
    id: '3',
    year: 2019,
    title: 'Award-Winning Designs',
    description: 'Won "Best Wedding Cake Designer" in the Gujarat Bakery Awards.'
  },
  {
    id: '4',
    year: 2021,
    title: 'Expanded Kitchen',
    description: 'Moved to a larger location with a dedicated workshop space for traditional Indian cake classes.'
  },
  {
    id: '5',
    year: 2023,
    title: 'National Recognition',
    description: 'Featured in "Food & Hospitality India" magazine as one of the top artisan bakeries in Gujarat.'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Celebration Cakes',
    description: 'Personalized cakes for birthdays, anniversaries, and special occasions. Each cake is designed specifically for your event, with your choice of traditional Indian or fusion flavors, fillings, and decorative elements.',
    imageUrl: SERVICE_IMAGES.customCakes,
    price: 'Starting at ₹1,000'
  },
  {
    id: '2',
    title: 'Wedding Cakes',
    description: 'Elegant, show-stopping wedding cakes designed to match your theme and style. Perfect for engagement ceremonies and wedding receptions. Includes consultation, tasting session, and delivery to your venue.',
    imageUrl: SERVICE_IMAGES.weddingCakes,
    price: 'Starting at ₹8,000'
  },
  {
    id: '3',
    title: 'Festival Special Cakes',
    description: 'Celebrate Diwali, Raksha Bandhan, Holi and other festivals with our specially designed themed cakes. Eggless options available for all festival cakes.',
    imageUrl: SERVICE_IMAGES.customCakes,
    price: 'Starting at ₹1,200'
  },
  {
    id: '4',
    title: 'Corporate Events',
    description: 'Impress your clients and colleagues with custom-branded cakes and desserts for corporate events, product launches, and office celebrations.',
    imageUrl: SERVICE_IMAGES.weddingCakes,
    price: 'Starting at ₹2,500'
  }
];