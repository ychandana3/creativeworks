import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <ul className="flex justify-between items-center container mx-auto">
        <li className="mr-auto">
          <NavLink
            exact
            to="/main/users"
            activeClassName="text-black bg-white "
            className="text-white px-4 py-2 mr-4 hover:text-black hover:bg-white hover:rounded-full"
          >
            Users
          </NavLink>
          <NavLink
            exact
            to="/main/reports"
            activeClassName="text-black bg-white rounded-full"
            className="text-white px-4 py-2 mr-4 hover:text-black hover:bg-white hover:rounded-full"
          >
            Reports
          </NavLink>
          <NavLink
            exact
            to="/forms"
            activeClassName="text-black bg-white rounded-full"
            className="text-white px-4 py-2 mr-4 hover:text-black hover:bg-white hover:rounded-full"
          >
            Forms
          </NavLink>
          <NavLink
            exact
            to="/roles"
            activeClassName="text-black bg-white rounded-full"
            className="text-white px-4 py-2 mr-4 hover:text-black hover:bg-white hover:rounded-full"
          >
            Roles
          </NavLink>
          <NavLink
            exact
            to="/help-center"
            activeClassName="text-black bg-white rounded-full"
            className="text-white px-4 py-2 mr-4 hover:text-black hover:bg-white hover:rounded-full"
          >
            Help Center
          </NavLink>
        </li>
        <li>
          <img
            className="h-8 w-8 rounded-full"
            src={process.env.PUBLIC_URL + '/avatar.png'}
            alt="User Avatar"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
