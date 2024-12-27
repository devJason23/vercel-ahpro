import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "Professional-Grade Air Compressor ($150 Value)",
  "Built-in Power Bank Feature ($50 Value)",
  "Digital Pressure Gauge ($30 Value)",
  "LED Emergency Light ($25 Value)",
  "Multiple Nozzle Attachments ($20 Value)",
  "Premium Storage Case ($25 Value)"
];

export const ValueStack = () => {
  const totalValue = benefits.reduce((acc, benefit) => {
    const value = parseInt(benefit.match(/\$(\d+)/)?.[1] || "0");
    return acc + value;
  }, 0);

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-6">Total Value: ${totalValue}</h3>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-lg">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};