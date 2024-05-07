import React from 'react';
import { useState } from 'react';
import UserModal from './UserModal';
import Badge from './Badge';
const Users = () => {
    const DUMMY_USERS = [
        {
          id: 1,
          name: 'John Doe',
          joinDate: '2023-01-15',
          earnings: '$500',
          status: 'Active',
          details: 'Lorem ipsum dolor sit amet'
        },
        {
          id: 2,
          name: 'Jane Smith',
          joinDate: '2023-03-20',
          earnings: '$700',
          status: 'Inactive',
          details: 'Consectetur adipiscing elit'
        }
      ];
    const [users, setUsers] = useState(DUMMY_USERS);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const addUser = (userData) => {
      const newUser = {
        id: users.length + 1,
        ...userData
      };
      setUsers([...users, newUser]);
    };


  return (
    <div className="flex flex-col justify-center overflow-x-auto m-16">
      <div className='flex justify-between items-center mb-8'>
        <div>
          <p className='text-xl font-semibold'>Users</p>
          <p className='text-slate-400'>Home/Account</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        + Add User
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map(user => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.joinDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.earnings}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.status === 'Active'?<Badge active={'active'}/>:<Badge active={'Inactive'}/>}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
          <UserModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={addUser}
          />
        )}
    </div>
  );
};

export default Users;
