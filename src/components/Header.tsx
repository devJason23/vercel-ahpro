import React from 'react';
import { Timer } from 'lucide-react';

export const Header = () => {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Timer className="w-4 h-4 animate-pulse" />
        <p className="text-sm font-semibold">
          WARNING: Last batch sold out in under 24 hours
        </p>
      </div>
    </div>
  );
};