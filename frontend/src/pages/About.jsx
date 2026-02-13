import React from "react";
import { Store, Heart, Users, Award, TrendingUp, Clock } from "lucide-react";
import { storeInfo } from "../mockData";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "500+" },
    { icon: TrendingUp, label: "Years of Service", value: `${new Date().getFullYear() - storeInfo.yearStarted}+` },
    { icon: Award, label: "Customer Rating", value: `${storeInfo.rating}/5` },
    { icon: Clock, label: "Daily Deliveries", value: "50+" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We source only the freshest and highest quality products from trusted suppliers for your family.",
    },
    {
      icon: Users,
      title: "Customer Trust",
      description: "Building lasting relationships through reliable service and consistent quality for years.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect your time. Same-day delivery guaranteed when you order before noon.",
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing with special discounts on bulk orders and regular subscriptions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Store size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About J K Chems
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Your trusted neighborhood grocery partner serving Gorakhpur, Jabalpur 
              with dedication, quality, and reliability since {storeInfo.yearStarted}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-green-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                J K Chems began its journey in <strong>{storeInfo.yearStarted}</strong> with a simple mission: 
                to provide fresh, quality groceries to the residents of Gorakhpur, Jabalpur, with 
                reliable and timely home delivery service.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What started as a small neighborhood grocery store has grown into a trusted name 
                in the community. We understand that every household has unique needs, and we pride 
                ourselves on our personal relationships with our customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to uphold our founding values of quality, consistency, and customer 
                satisfaction. Every order we fulfill is a testament to our commitment to serve our 
                community with care and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience the J K Chems Difference
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us for their daily grocery needs
          </p>
          <a
            href={`tel:${storeInfo.phone}`}
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
          >
            Call Us: {storeInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
