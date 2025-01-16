import React, { useState, useEffect } from 'react';
import { Scale, Ruler, Activity, X } from 'lucide-react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(0);
  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [animateValue, setAnimateValue] = useState(false);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = Number(height) / 100;
      const bmiValue = Number((Number(weight) / (heightInMeters * heightInMeters)).toFixed(1));
      setBMI(bmiValue);
      setAnimateValue(true);
      setShowModal(true);

      if (bmiValue < 18.5) {
        setStatus('Underweight');
        setStatusColor('from-blue-500 to-blue-600');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus('Normal Weight');
        setStatusColor('from-green-500 to-green-600');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus('Overweight');
        setStatusColor('from-yellow-500 to-yellow-600');
      } else {
        setStatus('Obesity');
        setStatusColor('from-red-500 to-red-600');
      }
    }
  };

  useEffect(() => {
    if (animateValue) {
      const timer = setTimeout(() => setAnimateValue(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [animateValue]);

  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
              <Scale size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold ml-4 text-white">BMI Calculator</h1>
          </div>

          <div className="space-y-6">
            {/* Weight Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Scale className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Weight (kg)"
              />
            </div>

            {/* Height Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Ruler className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Height (cm)"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateBMI}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold transform transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
            >
              Calculate BMI
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          
          <div className="relative bg-gray-800 rounded-2xl p-6 w-full max-w-md m-4 transform transition-all duration-300 ease-out scale-100 opacity-100">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-gray-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Your Results</h2>
            </div>
            
            <div className={`text-center p-6 rounded-xl bg-gradient-to-br ${statusColor} mb-6`}>
              <div className={`text-4xl font-bold text-white mb-2 ${
                animateValue ? 'animate-pulse' : ''
              }`}>
                {bmi}
              </div>
              <div className="text-xl text-white font-medium">{status}</div>
            </div>

            {/* BMI Scale */}
            <div className="grid grid-cols-4 gap-2 text-xs text-center">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <span className="text-blue-400">Underweight</span>
                <div className="text-gray-400 mt-1">&lt;18.5</div>
              </div>
              <div className="bg-green-500/20 p-2 rounded-lg">
                <span className="text-green-400">Normal</span>
                <div className="text-gray-400 mt-1">18.5-24.9</div>
              </div>
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <span className="text-yellow-400">Overweight</span>
                <div className="text-gray-400 mt-1">25-29.9</div>
              </div>
              <div className="bg-red-500/20 p-2 rounded-lg">
                <span className="text-red-400">Obese</span>
                <div className="text-gray-400 mt-1">&gt;30</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BMICalculator;