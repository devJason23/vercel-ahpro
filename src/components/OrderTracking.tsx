import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement order tracking logic here
    window.location.href = `https://autoenhancements.xyz/air-pump/track/${orderId}`;
  };

  return (
    <form onSubmit={handleTrackOrder} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter your order ID"
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};