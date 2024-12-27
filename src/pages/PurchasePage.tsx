import React from 'react';
import { ShieldCheck, Package, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { PaymentForm } from '../components/PaymentForm';

export const PurchasePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Complete Your Order</h1>
            
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://autoenhancements.co/cdn/shop/products/S5eb9e7d5f0b44c66b5d8ecd0f1ea1f5cj_1024x1024@2x.jpg"
                  alt="Portable Car Air Pump"
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h2 className="font-bold">Professional Car Air Pump</h2>
                  <p className="text-gray-600">12V Compressor + Power Bank</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-bold">Total:</span>
                <div className="text-right">
                  <span className="text-gray-500 line-through">$97</span>
                  <span className="text-2xl font-bold ml-2">$59.99</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span>Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-blue-600" />
                <span>Free Priority Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <span>Ships Within 24 Hours</span>
              </div>
            </div>

            <PaymentForm />
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold">1x</span>
                  <div>
                    <p className="font-semibold">Professional Air Compressor</p>
                    <p className="text-gray-600">With digital pressure gauge and auto-stop</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">1x</span>
                  <div>
                    <p className="font-semibold">Premium Storage Case</p>
                    <p className="text-gray-600">Durable, compact design</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">1x</span>
                  <div>
                    <p className="font-semibold">Multi-Adapter Kit</p>
                    <p className="text-gray-600">Fits all tire types and inflatables</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">🔥 Limited Time Bonus</h3>
              <p className="text-gray-700">
                Order in the next 24 hours and receive our exclusive emergency roadside guide - a $47 value, yours FREE!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};