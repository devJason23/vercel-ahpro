import React, { useState } from 'react';
import { Bitcoin, Wallet, DollarSign, Loader2 } from 'lucide-react';
import { createPayment } from '../services/payment';
import { useNavigate } from 'react-router-dom';

const PAYMENT_OPTIONS = [
  { id: 'btc', name: 'Bitcoin', icon: Bitcoin, currency: 'BTC' },
  { id: 'eth', name: 'Ethereum', icon: Wallet, currency: 'ETH' },
  { id: 'usdt', name: 'USDT', icon: DollarSign, currency: 'USDT' },
  { id: 'usdc', name: 'USDC', icon: DollarSign, currency: 'USDC' },
  { id: 'matic', name: 'Polygon', icon: Wallet, currency: 'MATIC' },
];

export const PaymentForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [error, setError] = useState('');

  const handlePayment = async () => {
    if (!selectedCurrency) {
      setError('Please select a payment method');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const orderId = `ORDER-${Date.now()}`;
      const response = await createPayment(59.99, selectedCurrency, orderId);
      
      // Store payment data in sessionStorage for the thank you page
      sessionStorage.setItem('paymentData', JSON.stringify({
        paymentId: response.payment_id,
        payAddress: response.pay_address,
        amount: response.pay_amount,
        currency: response.pay_currency
      }));

      // Redirect to payment URL or thank you page
      if (response.payment_url) {
        window.location.href = response.payment_url;
      } else {
        navigate('/thank-you');
      }
    } catch (err) {
      setError('Payment initialization failed. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {PAYMENT_OPTIONS.map(({ id, name, icon: Icon, currency }) => (
          <button
            key={id}
            type="button"
            onClick={() => setSelectedCurrency(currency)}
            className={`p-4 border rounded-lg flex items-center gap-3 transition-colors ${
              selectedCurrency === currency
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{name}</span>
          </button>
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      <button
        type="button"
        onClick={handlePayment}
        disabled={loading || !selectedCurrency}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          'Complete Purchase'
        )}
      </button>
    </div>
  );
};