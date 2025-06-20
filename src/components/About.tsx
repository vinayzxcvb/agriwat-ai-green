
import React from 'react';
import { Leaf, Sun, Calendar } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About the Project
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AgriWat leverages artificial intelligence to address critical challenges in agriculture and water management, 
            creating sustainable solutions for modern farming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Irrigation</h3>
                <p className="text-gray-600">
                  Our intelligent irrigation system uses machine learning algorithms to analyze soil moisture, 
                  weather patterns, and crop requirements to optimize water usage and maximize yield.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Sun className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Stress Detection</h3>
                <p className="text-gray-600">
                  Advanced sensors and computer vision technology monitor crop health in real-time, 
                  detecting early signs of water stress before they impact productivity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Historical data and weather forecasts are processed through AI models to predict 
                  optimal planting times, harvest schedules, and resource allocation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
              alt="Agricultural landscape with mountains"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem We're Solving</h3>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto">
              Agriculture consumes 70% of global freshwater resources, yet inefficient irrigation practices lead to 
              massive water waste. Climate change and growing populations demand smarter, more sustainable farming methods. 
              AgriWat bridges this gap by providing farmers with AI-driven insights that reduce water consumption while 
              increasing crop yields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
