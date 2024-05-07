import React from 'react'

const JoinedUsers = () => {
  return (
    <div className=' border border-slate-300 rounded shadow-md p-6'>
        <h2 className='text-4xl font-bold mb-8'>49</h2>
        <p className='text-slate-400 '>Recently Joined Users</p>
            <div className='flex py-6'>
                <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="My Image" className="mr-6" />
                <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="My Image" className="" />
                <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="My Image" className="" />
            
            </div>
        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Review</button>
        <button className='pl-4'>Invite New</button>
    </div>
  )
}

export default JoinedUsers;