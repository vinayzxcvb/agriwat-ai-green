
import React from 'react';
import { Map-pin, Image, Contact, Leaf } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Map-pin,
      title: "Smart Irrigation System",
      description: "Automated irrigation scheduling based on real-time soil conditions, weather data, and crop requirements.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Image,
      title: "Water Usage Dashboard",
      description: "Comprehensive analytics and visualization of water consumption patterns with actionable insights.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Contact,
      title: "Crop-Specific Advice",
      description: "Personalized recommendations for different crops including optimal watering schedules and nutrient timing.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Leaf,
      title: "Environmental Monitoring",
      description: "Continuous monitoring of environmental factors affecting crop health and water efficiency.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how AgriWat's innovative features are transforming agricultural practices 
            and water management across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
            <p className="text-gray-600">Water Savings</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <p className="text-gray-600">Yield Increase</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">90%</div>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};
