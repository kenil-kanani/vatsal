'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

// Dynamic import for the Lottie animation
// This prevents build errors when the JSON file is imported directly
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Use state to store the animation data
  const [animationData, setAnimationData] = useState<any>(null);

  // Load the animation data
  useEffect(() => {
    // In a real project, you would use a dynamic import
    // This is a workaround for the demo
    import('/Users/kenil/Desktop/temp/public/lottie/cake-frosting.json')
      .then((data) => {
        setAnimationData(data);
      })
      .catch((err) => {
        console.error('Failed to load animation:', err);
      });
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y,
          backgroundImage: 'url(/images/hero-bg.jpg)',
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
              Artisan Cakes <br />
              <span className="text-pink-300">Baked with Love</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Handcrafted cakes for every special occasion. 
              Made with premium ingredients and artistic flair.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              {animationData ? (
                <Lottie 
                  animationData={animationData.default || animationData} 
                  loop={true}
                  className="w-full h-80"
                />
              ) : (
                <div className="w-full h-80 flex items-center justify-center text-white">
                  <p>Loading animation...</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}