'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { HERO_BACKGROUND_URL } from '@/lib/imageUrls';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y,
          backgroundImage: `${HERO_BACKGROUND_URL}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Shreeji Cakes <br />
              <span className="text-pink-300">Baked with Love</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Handcrafted cakes for weddings, birthdays and festivals.
              Made with premium ingredients and traditional Gujarati flavors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/gallery" variant="primary">
                View Our Creations
              </Button>
              <Button href="/contact" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white">
                Order Custom Cake
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}