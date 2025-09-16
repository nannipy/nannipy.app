"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LogoPosition {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
}

const Footer = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [logoPositions, setLogoPositions] = useState<LogoPosition[]>([
    { x: 0.1, y: 0.1, dx: 1, dy: 1.5, size: 150 },
    { x: 0.3, y: 0.2, dx: -1.5, dy: 1.2, size: 150 },
    { x: 0.5, y: 0.3, dx: 1.2, dy: -1.8, size: 150 },
    { x: 0.2, y: 0.1, dx: 1.2, dy: -1.8, size: 150 },
    { x: 0.4, y: 0.3, dx: -1.8, dy: 1.2, size: 150 },
    { x: 0.6, y: 0.2, dx: 1.2, dy: -1.8, size: 150 }
  ]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Initialize window size after component mounts
  useEffect(() => {
    // Only update window size on client side
    setWindowSize({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    });
  }, []);

  const handleLogoClick = () => {
    let clickCount = 0;
    const handleClick = () => {
      clickCount++;
      if (clickCount === 2) {
        setShowAnimation(true);
        setTimeout(() => {
          setShowAnimation(false);
          window.location.href = '/'; // Redirect to homepage
        }, 5000);
      }
    };
    return handleClick;
  };

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      });
    };

    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    if (!windowSize.width || !windowSize.height) return; // Skip animation if window size not set

    let animationFrame: number;

    const animateLogos = () => {
      setLogoPositions(prevPositions =>
        prevPositions.map(pos => {
          const { x, y, dx, dy, size } = pos;

          // Update positions
          const newX = x + dx * 0.005;
          const newY = y + dy * 0.005;

          // Bounce off the edges
          let newDx = dx;
          let newDy = dy;
          if (newX < 0 || newX > 1 - size / windowSize.width) newDx = -dx;
          if (newY < 0 || newY > 1 - size / windowSize.height) newDy = -dy;

          return { x: newX, y: newY, dx: newDx, dy: newDy, size };
        })
      );
      animationFrame = requestAnimationFrame(animateLogos);
    };

    if (showAnimation) {
      animationFrame = requestAnimationFrame(animateLogos);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [showAnimation, windowSize]);

  const logoSrc = '/madeLogos.png';

  return (
    <div className="flex justify-center bg-gray-200 dark:bg-[#111111]">
      <div className="px-16  justify-center items-center">
        <button onClick={handleLogoClick()}>
          <Image src={logoSrc} alt="logo" width={100} height={100} />
        </button>
      </div>
      {showAnimation && windowSize.width > 0 && (
        <div
          className="fixed inset-0 bg-gray-200 dark:bg-black flex items-center justify-center z-50 overflow-hidden"
          style={{
            width: windowSize.width,
            height: windowSize.height
          }}
        >
          {logoPositions.map((pos, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${pos.x * windowSize.width}px`,
                top: `${pos.y * windowSize.height}px`,
                width: `${pos.size}px`,
                height: `${pos.size}px`
              }}
            >
              <Image src={logoSrc} alt="logo" width={pos.size} height={pos.size} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Footer;