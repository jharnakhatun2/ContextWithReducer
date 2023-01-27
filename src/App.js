import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Pages/Home';
import TopRated from './Component/Pages/TopRated';
import Main from './Navigation/Main';



function App(){
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topRated',
          element: <TopRated></TopRated>
        }
      ]
    }
  ])
  return (
    <div className="max-w-[1320px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;