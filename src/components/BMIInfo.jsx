import React from 'react';
import { Info, Heart, AlertTriangle, Activity, Scale } from 'lucide-react';

const BMIInfo = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-2xl">
            <Info size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold ml-4 text-white">Understanding Your BMI</h2>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Underweight Card */}
        <div className="group hover:scale-[1.02] transition-all duration-300">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative p-6 border border-blue-500/20 rounded-2xl bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-blue-400 text-lg font-semibold">Underweight (BMI &lt; 18.5)</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Being underweight might indicate nutritional deficiencies or other health issues. 
                Consider consulting a healthcare provider for personalized advice on healthy weight gain.
              </p>
            </div>
          </div>
        </div>

        {/* Normal Weight Card */}
        <div className="group hover:scale-[1.02] transition-all duration-300">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-600/10 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative p-6 border border-green-500/20 rounded-2xl bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-green-400 text-lg font-semibold">Normal Weight (BMI 18.5-24.9)</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Maintaining a healthy weight through balanced nutrition and regular physical activity 
                contributes to overall well-being and reduced health risks.
              </p>
            </div>
          </div>
        </div>

        {/* Overweight Card */}
        <div className="group hover:scale-[1.02] transition-all duration-300">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative p-6 border border-yellow-500/20 rounded-2xl bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3" />
                <h3 className="text-yellow-400 text-lg font-semibold">Overweight (BMI 25-29.9)</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Being overweight may increase risk of certain health conditions. 
                Focus on gradual weight loss through sustainable lifestyle changes and regular exercise.
              </p>
            </div>
          </div>
        </div>

        {/* Obesity Card */}
        <div className="group hover:scale-[1.02] transition-all duration-300">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative p-6 border border-red-500/20 rounded-2xl bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Activity className="h-6 w-6 text-red-400 mr-3" />
                <h3 className="text-red-400 text-lg font-semibold">Obesity (BMI ≥ 30)</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Obesity significantly increases health risks. Consult healthcare professionals for a 
                comprehensive weight management plan and potential medical interventions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
        <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
          <Info className="h-5 w-5 text-purple-400 mr-2" />
          Important Notes
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="h-2 w-2 mt-2 mr-2 rounded-full bg-purple-400"></span>
            BMI is a general indicator and may not be accurate for athletes, elderly, or pregnant women.
          </li>
          <li className="flex items-start">
            <span className="h-2 w-2 mt-2 mr-2 rounded-full bg-purple-400"></span>
            Factors like muscle mass, bone density, age, and ethnicity aren't considered in BMI calculations.
          </li>
          <li className="flex items-start">
            <span className="h-2 w-2 mt-2 mr-2 rounded-full bg-purple-400"></span>
            Always consult healthcare professionals for personalized health advice.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BMIInfo;