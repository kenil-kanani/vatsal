import { Metadata } from 'next';
import TeamSection from '@/components/about/TeamSection';
import Timeline from '@/components/about/Timeline';
import PageTransition from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'About Us | Artisan Cake Shop',
  description: 'Learn about our team of talented bakers and the story behind Artisan Cake Shop.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main>
        <div className="bg-pink-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're a team of passionate bakers dedicated to creating beautiful, 
              delicious cakes for your special moments.
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Artisan Cake Shop began in 2015 as a small home-based bakery, founded by Claire Wilson, 
                who had a passion for creating beautiful and delicious cakes. What started as baking for 
                friends and family quickly grew into a thriving business as word spread about the exceptional 
                quality and artistry of Claire's creations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In 2017, we opened our first storefront in downtown Sweet Town, allowing us to serve more 
                customers and expand our offerings. Our commitment to using only the finest ingredients and 
                creating custom designs for each client has earned us a reputation as the go-to bakery for 
                special occasions.
              </p>
              <p className="text-lg text-gray-700">
                Today, our team of talented bakers and designers continues to push the boundaries of cake 
                artistry, creating edible masterpieces that taste as amazing as they look. We're proud to 
                be part of our customers' most cherished celebrations, from weddings and birthdays to 
                anniversaries and corporate events.
              </p>
            </div>
          </div>
        </div>
        
        <TeamSection />
        <Timeline />
      </main>
    </PageTransition>
  );
}