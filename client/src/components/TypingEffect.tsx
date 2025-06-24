import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingEffect = ({ text, speed = 100, className = '' }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`${className} bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent`}>
      {displayText}
      <span className="animate-pulse text-slate-900 dark:text-white">|</span>
    </span>
  );
};

export default TypingEffect;