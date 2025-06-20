
import React from 'react';
import { Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">{t('heroTitle')}</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Revolutionizing agriculture through AI-powered water management and crop optimization. 
              Building sustainable solutions for the future of farming.
            </p>
            <div className="text-sm text-gray-400">
              <p>© 2024 AgriWat Project. All rights reserved.</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Project</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-green-400 transition-colors">{t('about')}</a></li>
              <li><a href="/features" className="hover:text-green-400 transition-colors">{t('features')}</a></li>
              <li><a href="#demo" className="hover:text-green-400 transition-colors">{t('demo')}</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Technology</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-green-400 transition-colors cursor-pointer">Machine Learning</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">IoT Sensors</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Computer Vision</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Predictive Analytics</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Built with passion for sustainable agriculture and water conservation
          </p>
        </div>
      </div>
    </footer>
  );
};
