
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Demo = () => {
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See AgriWat in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven agriculture through our interactive demonstrations 
            and real-world case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Interactive AI Assistant
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Try our multilingual AI assistant that helps farmers make informed decisions about 
              irrigation, crop management, and water conservation. Available in English, Hindi, and Telugu.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Real-time farming advice</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Multilingual support</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Crop-specific recommendations</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Weather-based insights</span>
              </li>
            </ul>
            
            <Link
              to="/ai-assistant"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              <Bot className="h-5 w-5 mr-2" />
              Try AI Assistant
              <ExternalLink className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Dashboard Demo Coming Soon</h4>
                <p className="text-gray-600">
                  Interactive prototype and video demonstrations will be available here
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80"
                alt="Wildlife in agricultural setting"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Case Study 1</h4>
              <p className="text-sm text-gray-600">Reduced water usage by 60% while maintaining crop yield in drought-prone regions</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=400&q=80"
                alt="Agricultural landscape"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Case Study 2</h4>
              <p className="text-sm text-gray-600">Improved crop health monitoring leading to 45% increase in productivity</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=400&q=80"
                alt="Livestock in natural setting"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Case Study 3</h4>
              <p className="text-sm text-gray-600">Integrated livestock and crop management for sustainable farming practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
