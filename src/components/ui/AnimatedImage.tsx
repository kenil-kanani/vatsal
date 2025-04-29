import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = ''
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isLoaded ? 1 : 0,
        scale: isLoaded ? 1 : 0.9
      }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className="object-cover"
      />
    </motion.div>
  );
}