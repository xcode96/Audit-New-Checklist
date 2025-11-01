
import React from 'react';
import Card from './Card';

const Hero: React.FC = () => {
  return (
    <Card className="text-center py-10 md:py-12 bg-gradient-to-r from-[#2d3748] to-[#1a1e26]">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
        ISO 27001 Readiness Dashboard
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        An interactive, data-driven overview of your information security posture, weighted by scope, criticality, and impact.
      </p>
    </Card>
  );
};

export default Hero;
