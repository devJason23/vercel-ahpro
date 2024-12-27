import axios from 'axios';

const API_KEY = '18E53ZC-5P747M3-G9A8H8P-6YJ7PHF';
const BASE_URL = 'https://api.nowpayments.io/v1';

export interface PaymentResponse {
  payment_id: string;
  payment_status: string;
  pay_address: string;
  price_amount: number;
  price_currency: string;
  pay_amount: number;
  pay_currency: string;
  order_id: string;
  payment_url: string;
}

export const createPayment = async (
  amount: number,
  currency: string,
  orderId: string
): Promise<PaymentResponse> => {
  const response = await axios.post(
    `${BASE_URL}/payment`,
    {
      price_amount: amount,
      price_currency: 'USD',
      pay_currency: currency,
      order_id: orderId,
      order_description: 'Professional Car Air Pump',
      ipn_callback_url: 'https://autoenhancements.xyz/air-pump/api/payment-webhook',
      success_url: 'https://autoenhancements.xyz/air-pump/thank-you',
      cancel_url: 'https://autoenhancements.xyz/air-pump/purchase',
    },
    {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    }
  );
  
  return response.data;
};