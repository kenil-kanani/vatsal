import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import PageTransition from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'Contact Us | Artisan Cake Shop',
  description: 'Get in touch with Artisan Cake Shop for custom cake orders, inquiries, or to schedule a consultation.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <main>
        <div className="bg-pink-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have a question or want to place an order? We'd love to hear from you!
            </p>
          </div>
        </div>
        
        <ContactForm />
        
        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit our shop to see our creations in person and enjoy a slice of cake in our café area.
              </p>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              {/* Replace with actual map component or iframe */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  Map will be displayed here.<br />
                  Replace this with an actual map component or iframe.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}