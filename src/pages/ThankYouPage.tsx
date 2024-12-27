import React, { useEffect, useState } from 'react';
import { Share2, Star } from 'lucide-react';
import { OrderTracking } from '../components/OrderTracking';

interface PaymentData {
  paymentId: string;
  payAddress: string;
  amount: number;
  currency: string;
}

export const ThankYouPage = () => {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('paymentData');
    if (storedData) {
      setPaymentData(JSON.parse(storedData));
      sessionStorage.removeItem('paymentData'); // Clear after reading
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center mb-8">
          <h1 className="text-4xl font-bold mb-6">Thank You For Your Order!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your professional car air pump is on its way to you!
          </p>
          
          {paymentData && (
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <h3 className="font-bold mb-2">Payment Details</h3>
              <p>Payment ID: {paymentData.paymentId}</p>
              <p>Amount: {paymentData.amount} {paymentData.currency}</p>
            </div>
          )}
          
          <div className="border-t border-b py-8 my-8">
            <h2 className="text-2xl font-bold mb-4">Track Your Order</h2>
            <OrderTracking />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Share Your Purchase</h3>
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Share2 className="w-5 h-5" />
                Share with Friends
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Leave a Review</h3>
              <button className="inline-flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
                <Star className="w-5 h-5" />
                Rate Your Experience
              </button>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✅ Track your order using the link in your confirmation email</li>
            <li>✅ Expect delivery within 3-5 business days</li>
            <li>✅ Download your bonus emergency roadside guide</li>
            <li>✅ Join our VIP customer group for exclusive offers</li>
          </ul>
        </div>
      </main>
    </div>
  );
};