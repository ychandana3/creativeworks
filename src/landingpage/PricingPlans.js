import React, { useState } from 'react';
import PricingPlan from './PricingPlan';
const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingPlans = [
    { features:['Free users','Works on 1 Device at once'], plan: "free", cost: "free" },
    { plan: 'Standard', cost: '$20', features: ['Limited People', 'Works on 4 devices at once', 'Connect anywhere'] },
    { plan: 'Premium', cost: '$30', features: ['Feature 1', 'Feature 2', 'Feature 3'] }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="mx-16 flex flex-col md:flex-row justify-around">
      {pricingPlans.map((pricingPlan, index) => (
        <PricingPlan
          key={index}
          plan={pricingPlan.plan}
          cost={pricingPlan.cost}
          features={pricingPlan.features}
          isSelected={selectedPlan === pricingPlan.plan}
          onSelectPlan={handleSelectPlan}
        />
      ))}
    </div>
  );
};

export default PricingPlans;
