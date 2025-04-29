import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeaturedCakes from '@/components/home/FeaturedCakes';
import Testimonials from '@/components/home/Testimonials';

export const metadata: Metadata = {
  title: 'Artisan Cake Shop | Handcrafted Cakes for Every Occasion',
  description: 'Delicious custom cakes for weddings, birthdays, and special events. Made with premium ingredients and artistic flair.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCakes />
      <Testimonials />
    </main>
  );
}
