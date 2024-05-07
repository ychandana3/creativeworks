import React from 'react'
import DoughnutReport from './DoughnutReport'
import UserEarnings from './UserEarnings'
import JoinedUsers from './JoinedUsers'

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
      <div className='flex '>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 sm:mb-0 md:mr-4'>
        <DoughnutReport /> 
    </div>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 sm:mb-0 md:mr-4'>
        <UserEarnings/>
    </div>
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3'>
        <JoinedUsers/>
    </div>
</div>

    </div>
  )
}

export default Reports