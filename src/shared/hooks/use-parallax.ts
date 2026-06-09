import { useEffect, useRef, useMemo } from "react";

export const useParallaxStars = (starCount = 300) => {
  const starsRef = useRef<(HTMLDivElement | null)[]>([]);

  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map(() => {
      const size = Math.random() < 0.1 ? (Math.random() * 2.5 + 1.5) : (Math.random() * 1.5 + 0.5);
      const colors = ['#ffffff', '#e0f2fe', '#fffbeb', '#f0f9ff', '#00e3fd'];
      const bgColor = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        id: Math.random().toString(36).substring(7),
        size, 
        bgColor,
        left: `${Math.random() * 100}%`, 
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.7 + 0.2,
        isPulsing: Math.random() > 0.85,
        depth: Math.random() * 0.1 + 0.02
      };
    });
  }, [starCount]);

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        const moveX = e.clientX - window.innerWidth / 2;
        const moveY = e.clientY - window.innerHeight / 2;
        
        stars.forEach((star, index) => {
          const el = starsRef.current[index];
          if (el) el.style.transform = `translate(${moveX * star.depth}px, ${moveY * star.depth}px)`;
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [stars]);

  return { stars, starsRef };
};