import React from 'react';

const PricingPlan = ({ features, plan, cost, isSelected, onSelectPlan }) => {
  return (
    <div
      className={`relative border-2 rounded-md border-gray-300 lg:w-[330px] h-[700px] flex flex-col justify-center items-center content-center lg:items-stretch ${
        isSelected ? 'bg-gray-200' : ''
      } p-8 space-y-8 lg:space-y-0 lg:flex-row lg:justify-center lg:space-x-6`}
      onClick={() => onSelectPlan(plan)}
    >
      <div className="flex flex-col justify-center items-center lg:py-8">
        <div className='text-center'>
        <img src={process.env.PUBLIC_URL + '/giftbox.png'} alt="My Image" className="mx-auto block mb-8 lg:mb-4" />
        </div>
        <h2 className="text-xl font-bold mb-4 lg:my-4 text-center">{plan}</h2>
        <ul className="m-4 lg:mt-4 lg:mb-16">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <img
                src={process.env.PUBLIC_URL + '/greentick.png'}
                alt="My Image"
                className="mr-2"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className='absolute bottom-8 w-full text-center'>       
        <h2 className="text-xl font-bold mb-4 lg:mt-16">{cost}</h2>
        <button className={`px-6 py-2 ${isSelected? 'text-white border-blue-500 bg-blue-500 rounded':'border border-blue-500 text-blue-500 bg-white rounded-lg hover:text-white hover:bg-blue-500 focus:outline-none transition-all duration-300'}`}>
          Select
        </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
