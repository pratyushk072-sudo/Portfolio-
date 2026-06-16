import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '60px',
        height: '60px',
        backgroundColor: 'var(--accent)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(20px)',
        opacity: isVisible ? 0.6 : 0,
        transform: `translate(${position.x - 30}px, ${position.y - 30}px)`,
        transition: 'opacity 0.3s ease, transform 0.05s linear',
        zIndex: 9998,
      }}
    />
  );
};

export default CustomCursor;
