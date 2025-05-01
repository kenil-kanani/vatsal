import { Metadata } from 'next';
import Timeline from '@/components/about/Timeline';
import PageTransition from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'About Us | Shreeji Cake - Bayad, Gujarat',
  description: 'Learn about our team of talented bakers and the story behind Shreeji Cake in Bayad, Gujarat.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <main>
        <div className="bg-pink-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We&apos;re a team of passionate bakers dedicated to creating beautiful, 
              delicious cakes with authentic Gujarati flavors for your special moments.
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Shreeji Cake began in 2015 as a small home-based bakery in Bayad, founded by Kailash Shah, 
                who had a passion for creating beautiful and delicious cakes with traditional Indian flavors. 
                What started as baking for friends and family quickly grew into a thriving business as word 
                spread about the exceptional quality and unique fusion of traditional Gujarati sweets with 
                modern cake designs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In 2017, we opened our first storefront in Swaminarayan Society, Bayad, allowing us to serve more 
                customers and expand our offerings. Our commitment to using only the finest local ingredients and 
                creating custom designs for each client has earned us a reputation as the go-to bakery for 
                special occasions throughout Gujarat.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We take pride in offering both eggless and regular cake options to cater to all dietary preferences,
                making our cakes perfect for all religious and cultural celebrations. Our specialty lies in creating
                fusion cakes that blend traditional Indian flavors like kesar (saffron), pista (pistachio), and
                mango with modern cake techniques.
              </p>
              <p className="text-lg text-gray-700">
                Today, our team of talented bakers and designers continues to innovate with uniquely Indian flavors,
                creating edible masterpieces that taste as amazing as they look. We&apos;re proud to be part of our customers&apos;
                most cherished celebrations, from weddings and Diwali to birthdays and corporate events across Gujarat.
              </p>
            </div>
          </div>
        </div>
        <Timeline />
      </main>
    </PageTransition>
  );
}