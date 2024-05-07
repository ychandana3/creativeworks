import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageHeader = () => {
    return (
        <div className="flex justify-between items-center m-1">
            <div className="flex items-center">
                <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="My Image" className="" />
                <Link to="/" className="p-2 font-bold text-black">Creative Works</Link>
            </div>
            <ul className="flex">
                <li className="ml-6">
                    <Link to="/pricing" className="p-6 text-gray-500">Pricing</Link>
                </li>
                <li className="ml-6">
                    <Link to="/testimonials" className="p-6 text-gray-500">Testimonials</Link>
                </li>
                <li className="ml-6">
                    <Link to="/signin" className="p-6 font-bold text-black px-4 py-2">Sign In</Link>
                </li>
                <li className="ml-6">
                    <Link to="/signup" className="p-6 font-bold text-blue-500 border border-blue-500 rounded-full px-4 py-2">Sign Up</Link>
                </li>
            </ul>
        </div>
    );
}

export default LandingPageHeader;
