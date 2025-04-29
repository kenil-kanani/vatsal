import { Metadata } from 'next';
import ServicesList from '@/components/services/ServicesList';
import PageTransition from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'Services | Artisan Cake Shop',
  description: 'Explore our range of cake services including custom cakes, wedding cakes, cupcakes, and cake decorating classes.',
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <main>
        <div className="bg-pink-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              From custom celebration cakes to wedding masterpieces, we offer a range of 
              services to make your special occasions even sweeter.
            </p>
          </div>
        </div>
        
        <ServicesList />
        
        <div className="bg-pink-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Custom Orders</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Don't see exactly what you're looking for? We love creating custom cakes 
              tailored to your specific vision. Contact us to discuss your ideas and let 
              us bring them to life!
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-pink-600 text-white py-3 px-8 rounded-full font-medium hover:bg-pink-700 transition-colors"
            >
              Request a Custom Order
            </a>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}