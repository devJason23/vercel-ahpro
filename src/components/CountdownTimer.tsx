import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        if (current.seconds > 0) {
          return { ...current, seconds: current.seconds - 1 };
        }
        if (current.minutes > 0) {
          return { ...current, minutes: current.minutes - 1, seconds: 59 };
        }
        if (current.hours > 0) {
          return { hours: current.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <Timer className="w-5 h-5 animate-pulse" />
        <p className="text-sm font-bold">
          Special Offer Ends In: {String(timeLeft.hours).padStart(2, '0')}:
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </p>
      </div>
    </div>
  );
};