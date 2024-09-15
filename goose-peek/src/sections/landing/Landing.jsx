import React from 'react';
import './landing.css';
import Task from '../task/Task.jsx';

const Landing = () => {
  return (
    <div className='bg-primary p-8 text-center font-iregular h-screen rounded-sm'>
      <h1 className='font-iregular text-xl text-secondary '>Goose Peek</h1>
      <img id='logo' src={process.env.PUBLIC_URL + '/geese.png'} alt="logo" />
      <p className='text-secondary mb-4'>Ready to lock in?</p>
      <Task />
    </div>
  );
};

export default Landing;
