import { Metadata } from 'next';
import MasonryGallery from '@/components/gallery/MasonryGallery';
import PageTransition from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'Gallery | Artisan Cake Shop',
  description: 'Browse our gallery of custom cakes, wedding cakes, and other sweet creations to inspire your next order.',
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <main>
        <div className="bg-pink-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cake Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Browse our collection of handcrafted cakes and get inspired for your next celebration.
            </p>
          </div>
        </div>
        
        <MasonryGallery />
        
        <div className="bg-pink-50 py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Order?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              See something you love or have your own design in mind? Contact us to discuss your cake needs!
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-pink-600 text-white py-3 px-8 rounded-full font-medium hover:bg-pink-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}