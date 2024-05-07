import React from 'react'
import DoughnutReport from './DoughnutReport'
import UserEarnings from './UserEarnings'
const Reports = () => {
  return (
    <div className="flex flex-col justify-center overflow-x-auto m-16">
      <div className='flex justify-between items-center mb-8'>
        <div>
          <p className='text-xl font-semibold'>Reports</p>
          <p className='text-slate-400'>Home/Account</p>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        + Add User
        </button>
      </div>
      <div className='flex justify-between'>
        <div className='w-1/3'>
            <DoughnutReport /> 
        </div>
        <div className='w-1/3'>
        <UserEarnings/>
        </div>
        <div className='w-1/3'></div>
         
        
      </div>
    </div>
  )
}

export default Reports