import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

import Task from "./sections/task/Task.jsx";
import Stats from "./sections/stats/Stats.jsx";

const router = createBrowserRouter ([
  {
      path: "/",
      element: <App/>,
  },

  {
      path: "/tasks",
      element: <Task/>,
  },

  {
    path: "/stats",
    element: <Stats/>,
},

]);
//selecting id root from index.html to be rendered
const root = ReactDOM.createRoot(document.querySelector('#root'));
//render app component
root.render(
  <RouterProvider router={router}/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
