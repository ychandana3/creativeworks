// UserForm.js
import React from 'react';

const UserForm = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto my-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={onChange} required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="joinDate" className="block text-sm font-medium text-gray-700">Join Date</label>
        <input type="date" name="joinDate" id="joinDate" value={formData.joinDate} onChange={onChange} required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="earnings" className="block text-sm font-medium text-gray-700">Earnings</label>
        <input type="text" name="earnings" id="earnings" value={formData.earnings} onChange={onChange} required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select name="status" id="status" value={formData.status} onChange={onChange} required className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
        <textarea name="details" id="details" value={formData.details} onChange={onChange} required rows="3" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
      </div>
      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add User</button>
    </form>
  );
};

export default UserForm;
