
import React from 'react';
import { MapPin, BarChart3, Users, Leaf, Zap, Shield, Globe, TrendingUp } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesPage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MapPin,
      title: t('smartIrrigationSystem'),
      description: t('smartIrrigationDesc'),
      color: "bg-green-100 text-green-600",
      details: [
        "Real-time soil moisture monitoring",
        "Weather-based irrigation scheduling",
        "Crop-specific water requirements",
        "Mobile app integration"
      ]
    },
    {
      icon: BarChart3,
      title: t('waterUsageDashboard'),
      description: t('waterDashboardDesc'),
      color: "bg-blue-100 text-blue-600",
      details: [
        "Water consumption tracking",
        "Cost analysis and savings",
        "Historical data visualization",
        "Performance benchmarking"
      ]
    },
    {
      icon: Users,
      title: t('cropSpecificAdvice'),
      description: t('cropAdviceDesc'),
      color: "bg-yellow-100 text-yellow-600",
      details: [
        "Personalized crop recommendations",
        "Growth stage monitoring",
        "Nutrient timing guidance",
        "Harvest optimization"
      ]
    },
    {
      icon: Leaf,
      title: t('environmentalMonitoring'),
      description: t('envMonitoringDesc'),
      color: "bg-purple-100 text-purple-600",
      details: [
        "Continuous environmental sensing",
        "Climate impact assessment",
        "Pest and disease alerts",
        "Sustainability metrics"
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: Zap,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for predictive farming insights"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security for your agricultural data"
    },
    {
      icon: Globe,
      title: "Satellite Integration",
      description: "Satellite imagery analysis for large-scale monitoring"
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Data-driven strategies to maximize crop productivity"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('featuresTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t('featuresDescription')}
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Technology Stack
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge technologies to deliver reliable and scalable agricultural solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Impact
              </h2>
              <p className="text-lg text-gray-600">
                Real results from farmers using AgriWat technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-green-50 rounded-2xl p-8">
                <div className="text-5xl font-bold text-green-600 mb-2">75%</div>
                <p className="text-gray-600 font-medium">{t('waterSavings')}</p>
              </div>
              <div className="text-center bg-blue-50 rounded-2xl p-8">
                <div className="text-5xl font-bold text-blue-600 mb-2">40%</div>
                <p className="text-gray-600 font-medium">{t('yieldIncrease')}</p>
              </div>
              <div className="text-center bg-yellow-50 rounded-2xl p-8">
                <div className="text-5xl font-bold text-yellow-600 mb-2">90%</div>
                <p className="text-gray-600 font-medium">{t('accuracyRate')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
