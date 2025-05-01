'use client';

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export default function LottieAnimation() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Import the animation data
    import('/Users/kenil/Desktop/temp/public/lottie/cake-frosting.json')
      .then((data) => {
        setAnimationData(data);
      })
      .catch((err) => {
        console.error('Failed to load animation:', err);
      });
  }, []);

  if (!animationData) {
    return (
      <div className="w-full h-80 flex items-center justify-center text-white">
        <p>Loading animation...</p>
      </div>
    );
  }

  return (
    <Lottie 
      animationData={animationData.default || animationData} 
      loop={true}
      className="w-full h-80"
    />
  );
}