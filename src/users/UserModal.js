// UserModal.js
import React, { useState } from 'react';
import UserForm from './UserForm';

const UserModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    joinDate: '',
    earnings: '',
    status: '',
    details: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg w-96 ring-2 ring-blue-500 ring-inset relative">
          <button className="absolute bottom-6 right-0 m-4 bg-red-500 py-2 px-3 rounded text-white" onClick={onClose}>Close</button>
          <UserForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UserModal;
