import React from 'react';

const Badge = ({ active }) => {
  const badgeColor = active === 'active'? 'bg-green-500' : 'bg-red-500';
  const textColor = active === 'active' ? 'text-green-900' : 'text-red-900';

  return (
    <div className={`inline-block rounded-full px-3 py-1 ${badgeColor}`}>
      <span className={`font-semibold text-sm ${textColor}`}>
        {active === 'active'? 'Active' : 'Inactive'}
      </span>
    </div>
  );
};

export default Badge;
