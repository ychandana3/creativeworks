import React, { useState } from "react";
import PricingPlan from "./PricingPlan";
const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricingPlans = [
    {
      features: ["Free users", "Works on 1 Device at once"],
      plan: "free",
      cost: "free",
    },
    {
      plan: "Standard",
      cost: "$20",
      features: [
        "Limited People",
        "Works on 4 devices at once",
        "Connect anywhere",
      ],
    },
    {
      plan: "Premium",
      cost: "$30",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <section id="pricing">
      <h2 className="w-full text-5xl font-bold mt-32 mb-6 text-center">
        Choose Your Plan
      </h2>
      <p className="text-xl text-center mb-16">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
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
    </section>
  );
};

export default PricingPlans;
