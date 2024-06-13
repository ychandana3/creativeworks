import React, { useState } from "react";
import UserModal from "./UserModal";
import Badge from "./Badge";

const Users = () => {
  const DUMMY_USERS = [
    {
      id: 1,
      name: "John Doe",
      joinDate: "2023-01-15",
      earnings: "$500",
      status: "Active",
      details: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      name: "Jane Smith",
      joinDate: "2023-03-20",
      earnings: "$700",
      status: "Inactive",
      details: "Consectetur adipiscing elit",
    },
    {
      id: 3,
      name: "John Doe",
      joinDate: "2023-01-15",
      earnings: "$500",
      status: "Active",
      details: "Lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      name: "Jane Smith",
      joinDate: "2023-03-20",
      earnings: "$700",
      status: "Inactive",
      details: "Consectetur adipiscing elit",
    },
    {
      id: 5,
      name: "John Doe",
      joinDate: "2023-01-15",
      earnings: "$500",
      status: "Active",
      details: "Lorem ipsum dolor sit amet",
    },
    {
      id: 6,
      name: "Jane Smith",
      joinDate: "2023-03-20",
      earnings: "$700",
      status: "Inactive",
      details: "Consectetur adipiscing elit",
    },
  ];

  const [users, setUsers] = useState(DUMMY_USERS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 5;

  const addUser = (userData) => {
    const newUser = {
      id: users.length + 1,
      ...userData,
    };
    setUsers([...users, newUser]);
  };

  const sortUsers = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredUsers = sortedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.joinDate.includes(searchQuery) ||
      user.earnings.includes(searchQuery) ||
      user.status.toLowerCase().includes(searchQuery) ||
      user.details.toLowerCase().includes(searchQuery)
  );

  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col justify-center overflow-x-auto m-16">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div>
            <p className="text-xl font-semibold">Users</p>
            <p className="text-slate-400">Home/Account</p>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-4 px-4 py-2 border rounded"
          />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          + Add User
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => sortUsers("name")}
            >
              Name{" "}
              {sortConfig.key === "name" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => sortUsers("joinDate")}
            >
              Join Date{" "}
              {sortConfig.key === "joinDate" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => sortUsers("earnings")}
            >
              Earnings{" "}
              {sortConfig.key === "earnings" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => sortUsers("status")}
            >
              Status{" "}
              {sortConfig.key === "status" &&
                (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Details
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Edit
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.joinDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.earnings}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge
                  active={user.status === "Active" ? "active" : "inactive"}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.details}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center mt-4 space-x-1">
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {isModalOpen && (
        <UserModal onClose={() => setIsModalOpen(false)} onSubmit={addUser} />
      )}
    </div>
  );
};

export default Users;
