import React from 'react'

const UserEarnings = () => {
  return (
    <div className='shadow-md p-6'>
        <h2 className='text-4xl font-bold mb-8'>$3290.00</h2>
        <p className='text-slate-400 '>Users Earnings</p>
        <div className='grid grid-cols-1 divide-y divide-dashed'>
            <div className='flex justify-between py-6'>
                <p className='text-gray-700'>Avg. User Budget</p>
                <p>$6570</p>
            </div>
            <div className='flex justify-between py-6'>
                <p className='text-gray-700'>Avg. User Budget</p>
                <p>$6570</p>
            </div>
            <div className='flex justify-between py-6'>
                <p className='text-gray-700'>Avg. User Budget</p>
                <p>$6570</p>
            </div>
        </div>
    </div>
  )
}

export default UserEarnings