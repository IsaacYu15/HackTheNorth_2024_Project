import React from 'react';
import './landing.css';
import Task from '../task/Task.jsx';
import data from '../geese/data.js';


const Landing = () => {
  return (
    <div className='bg-primary p-8 font-iregular h-screen rounded-sm'>
      <div className="flex flex-row">
      <div className="flex flex-col">
      <h1 className='font-body text-3xl text-secondary left-10'>Goose</h1>
      <h1 className='font-body text-3xl text-secondary left-10'>Peek</h1>
      </div>

      <img id='logo' src={process.env.PUBLIC_URL + data[0].path} alt="logo" />
      </div>
      
      <p className='text-secondary mb-4 font-body text-xl'>Ready to lock in?</p>
      <Task />
    </div>
  );
};

export default Landing;
