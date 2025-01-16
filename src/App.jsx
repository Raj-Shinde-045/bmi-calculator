// App.jsx
import React from 'react';
import BMICalculator from './components/BMICalculator';
import BMIInfo from './components/BMIInfo';

function App() {
  const marqueeText = "BMI Calculator";
  const repeatedText = Array(50).fill(null).map((_, index) => (
    <span key={index} className="mx-4">
      {marqueeText}
    </span>
  ));

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex flex-col items-center justify-start">
      <div className="w-full bg-gray-800 text-white py-2 overflow-hidden">
        <div className="animate-marquee-rtl whitespace-nowrap">
          {repeatedText}
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-1">
          <BMICalculator />
        </div>
        <div className="lg:col-span-2">
          <BMIInfo />
        </div>
      </div>
    </div>
  );
}

export default App;