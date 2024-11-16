"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [logoPositions, setLogoPositions] = useState([
    { x: 0.1, y: 0.1, dx: 1, dy: 1.5, size: 100 },
    { x: 0.3, y: 0.2, dx: -1.5, dy: 1.2, size: 120 },
    { x: 0.5, y: 0.3, dx: 1.2, dy: -1.8, size: 150 }
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
        }, 10000);
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

    let animationFrame;

    const animateLogos = () => {
      setLogoPositions(prevPositions =>
        prevPositions.map(pos => {
          let { x, y, dx, dy, size } = pos;

          // Update positions
          x += dx * 0.005;
          y += dy * 0.005;

          // Bounce off the edges
          if (x < 0 || x > 1 - size / windowSize.width) dx = -dx;
          if (y < 0 || y > 1 - size / windowSize.height) dy = -dy;

          return { x, y, dx, dy, size };
        })
      );
      animationFrame = requestAnimationFrame(animateLogos);
    };

    if (showAnimation) {
      animationFrame = requestAnimationFrame(animateLogos);
    }

    return () => cancelAnimationFrame(typeof animationFrame === 'number' ? animationFrame : 0);
  }, [showAnimation, windowSize]);

  return (
    <div className="flex justify-center">
      <div className="px-14 mb-10 justify-center">
        <a onClick={handleLogoClick()}>
          <Image src="/madeLogos.png" alt="logo" width={100} height={100} />
        </a>
      </div>
      {showAnimation && windowSize.width > 0 && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
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
              <Image src="/madeLogos.png" alt="logo" width={pos.size} height={pos.size} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Footer;