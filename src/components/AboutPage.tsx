import React from 'react';
import { Award, Heart, Leaf } from 'lucide-react';
import pushviLogo from '../assets/pushvi-logo.png';
import founderPhoto from '../assets/founder.png';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-4">
          <img src={pushviLogo} alt="Pushvi Logo" className="w-16 h-16 mr-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-rose-500 font-serif">Pushvi</span>
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Rooted in nature, powered by purpose — Pushvi is redefining beauty with cosmetics made from recycled flowers. Every product we create is 100% organic, completely chemical-free, and safe for all skin types.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2025 by a passionate student team — Akhilesh, Sravanthi, Harshini, and Sneha — Pushvi began as a heartfelt effort to turn flower waste into meaningful beauty. What started as a small idea quickly blossomed into a mission to craft cosmetics that are pure, sustainable, and deeply personal.
          </p>
          <p className="text-gray-600 mb-4">
            From floral lip balms to body oils and blushes, Pushvi products embody ethical beauty that nurtures both skin and soul — trusted by those who believe in clean beauty with a conscience.
          </p>
        </div>
        <div className="relative flex justify-center">
          <img
            src={pushviLogo}
            alt="Pushvi Logo Large"
            className="rounded-2xl shadow-lg w-48 h-48 object-contain bg-white p-4"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🐾
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cruelty-Free</h3>
            <p className="text-gray-600">
              We believe in compassion — none of our products are tested on animals. Beauty should never harm life.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🌍
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable</h3>
            <p className="text-gray-600">
              From recycled flower ingredients to eco-conscious packaging, every Pushvi product is made with the Earth in mind.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🌿
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pure Quality</h3>
            <p className="text-gray-600">
              Handcrafted with 100% natural, chemical-free ingredients — gentle on your skin, powerful in purpose.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Founder</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Akhilesh Chandaluri</h3>
              <p className="text-rose-500 font-medium mb-4">Co-Founder, Pushvi</p>
              <p className="text-gray-600 mb-4">
                Akhilesh's vision for Pushvi began with a simple yet powerful belief — that beauty should heal, not harm. Driven by a passion for sustainability and innovation, he led the transformation of waste flowers into clean, organic cosmetics that are safe for every skin type.
              </p>
              <p className="text-gray-600 italic">
                "We don't just make cosmetics — we create a movement. One that celebrates purity, protects nature, and proves that beauty can bloom from what's left behind."
              </p>
            </div>
            <div className="flex justify-center space-x-8">
              {/* Test with logo (we know this works) */}
              <div className="text-center">
                <img
                  src={pushviLogo}
                  alt="Logo Test"
                  className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-green-500"
                />
                <p className="text-green-600 font-bold mt-2">LOGO (WORKS)</p>
              </div>
              
              {/* Test with founder photo */}
              <div className="text-center">
                <img
                  src={founderPhoto}
                  alt="Akhilesh Chandaluri - Founder"
                  className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-red-500"
                  onLoad={() => console.log('✅ Founder photo loaded!')}
                  onError={(e) => console.error('❌ Founder photo failed:', e)}
                />
                <p className="text-red-600 font-bold mt-2">FOUNDER (TEST)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};