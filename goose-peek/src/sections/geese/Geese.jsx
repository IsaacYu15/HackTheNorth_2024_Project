import './geese.css';
import Navbar from '../navbar/Navbar.jsx';

import React, {useState} from 'react';

const Stats = () => {
  const [angerLevel, setAngerLevel] = useState(0);

  return (
    <section className='geese_container'>
        <h1>Geese</h1>
        <p>Current Anger: {angerLevel}</p>
        <Navbar/>
    </section>

  );
};

export default Stats;