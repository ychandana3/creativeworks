import LandingPage from "./landingpage/LandingPage";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Auth from "./Auth";
import Navbar from "./users/Navbar";
import Users from "./users/Users";
import Reports from "./reports/Reports";
import { useState } from "react";
export function App() {
  return (
    <>
      <LandingPage/>
    </>
  );
}

export function MainPage() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}
export const router = createBrowserRouter([
  {
    path: '/',
    element:<LandingPage/>
  },
  {
    path: '/signin',
    element:<Auth />
  },
  {
    path: '/signup',
    element:<Auth />
  },
  {
    path: '/main',
    element:<MainPage/>,
    children: [
      {
        path: "users",
        element: <Users/>,
      },
      {
        path: "reports",
        element: <Reports/>,
      },
    ],

  }
])
