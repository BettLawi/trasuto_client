import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return (
    <div className="bg-whiteBackground min-h-screen flex items-center justify-center text-primaryBlue">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
