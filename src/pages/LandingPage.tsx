// src/pages/LandingPage.tsx
import React from 'react';
import { ArrowRight, Shield, Star, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">Auto Enhancements Pro</span>
          <nav>
            <ul className="flex gap-6">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link to="/purchase" className="text-gray-600 hover:text-gray-900">Buy Now</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

// CountdownTimer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-3">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">
          Special Offer Ends In: 
          <span className="font-mono font-bold ml-2">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </p>
      </div>
    </div>
  );
};

// ValueStack Component
const ValueStack = () => {
  const benefits = [
    {
      title: "Professional-Grade Quality",
      description: "Built with heavy-duty materials and advanced technology for lasting performance"
    },
    {
      title: "Built-in Power Bank",
      description: "Charge your phone or other devices in emergencies"
    },
    {
      title: "Digital Pressure Gauge",
      description: "Precise pressure readings for perfect inflation every time"
    },
    {
      title: "LED Emergency Light",
      description: "Bright LED light for nighttime emergencies"
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">What You Get</h2>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-green-500 text-white p-1 rounded-full">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Testimonials type
type Testimonial = {
  name: string;
  review: string;
  rating: number;
};

// Main LandingPage Component
export const LandingPage = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Michael R.",
      review: "This thing is a beast! Filled my truck's tires in minutes. The power bank feature saved me twice already.",
      rating: 5
    },
    {
      name: "Sarah L.",
      review: "As a woman who drives alone often, this gives me peace of mind. It's so easy to use and the LED light is super bright.",
      rating: 5
    },
    {
      name: "David K.",
      review: "Worth every penny. The digital gauge is accurate and it's built like a tank. This is professional grade stuff.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CountdownTimer />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Last Car Air Pump You'll Ever Need To Buy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Professional-Grade 12V Compressor That Also Charges Your Phone.
            <span className="font-semibold"> Lifetime Warranty Included.</span>
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Joined by 10,000+ smart car owners
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="/product-image.jpg"
                alt="Professional Car Air Pump"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="text-center">
                <Star className="w-6 h-6 text-yellow-400 mx-auto" />
                <p className="font-semibold">4.9/5 Rating</p>
                <p className="text-sm text-gray-600">2,847 Reviews</p>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-blue-600 mx-auto" />
                <p className="font-semibold">Fast Shipping</p>
                <p className="text-sm text-gray-600">2-3 Day Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-green-600 mx-auto" />
                <p className="font-semibold">Lifetime Warranty</p>
                <p className="text-sm text-gray-600">100% Guaranteed</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h2 className="text-2xl font-bold mb-4">
                Why This Offer Won't Last Long
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">1.</span>
                  <p>Last batch sold out in under 24 hours</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">2.</span>
                  <p>Limited stock due to high demand</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">3.</span>
                  <p>Special pricing ends when timer hits zero</p>
                </li>
              </ul>
            </div>

            <ValueStack />

            <div className="text-center">
              <div className="mb-6">
                <span className="text-gray-500 line-through text-xl">$97</span>
                <span className="text-4xl font-bold ml-3">$59.99</span>
              </div>
              
              <Link 
                to="/purchase"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 mb-4"
              >
                Claim Your Air Pump Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <p className="text-sm text-gray-600">
                🔒 Secure Checkout - 100% Money Back Guarantee
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Our Customers Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4">"{testimonial.review}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/purchase"
            className="inline-flex items-center justify-center px-8 py-4 text-xl font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Get Your Professional Air Pump Now
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </main>
    </div>
  );
};