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
              Have a question or want to place an order? We&apos;d love to hear from you!
            </p>
          </div>
        </div>
        
        <ContactForm />
      </main>
    </PageTransition>
  );
}