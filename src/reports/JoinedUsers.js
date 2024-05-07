import React from 'react'

const JoinedUsers = () => {
  return (
    <div className='shadow-md p-6'>
        <h2 className='text-4xl font-bold mb-8'>49</h2>
        <p className='text-slate-400 '>Recently Joined Users</p>
            <div className='flex justify-between py-6'>
                <img src={process.env.PUBLIC_URL + '/mainImg.png'} alt="My Image" className="w-full h-auto" />

            </div>
    </div>
  )
}

export default JoinedUsers;