import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeaturedCakes from '@/components/home/FeaturedCakes';
import Testimonials from '@/components/home/Testimonials';

export const metadata: Metadata = {
  title: 'Shreeji Cake | Premium Cakes in Gujarat, India',
  description: 'Delicious custom cakes for weddings, birthdays, and festivals. Made with premium ingredients and traditional Indian flavors in Bayad, Gujarat.',
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
