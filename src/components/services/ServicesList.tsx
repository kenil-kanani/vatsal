'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { services } from '@/lib/data';

export default function ServicesList() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Discover the range of cake services we offer for every occasion"
          centered
        />

        <div className="mt-12 space-y-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              <div 
                className="flex flex-col md:flex-row cursor-pointer"
                onClick={() => toggleExpand(service.id)}
              >
                <div className="md:w-1/3 relative h-64">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <span className="text-pink-600 font-semibold">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-600 line-clamp-2 md:line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-pink-600 font-medium">
                      {expandedId === service.id ? 'Show less' : 'Learn more'}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-pink-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="px-6 pb-6 overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Button href="/contact">
                        Request This Service
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}