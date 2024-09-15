import './geese.css';
import {Button} from 'react-native';
import data from './data.js';

import React, {useState, useEffect} from 'react';

const Stats = () => {
  const [angerLevel, setAngerLevel] = useState(5);

  function decreaseAnger ()
  {
    if (angerLevel > 0)
    {
        setAngerLevel(angerLevel - 1);
    }
  }

  return (
    <section className='geese_container'>
        <h1>Geese</h1>
        <p>Current Anger: {angerLevel}</p>
        <img id='geese' src={process.env.PUBLIC_URL + data[angerLevel].path} alt="logo" />

        <Button onPress={decreaseAnger} title="calm goose"/>
        
    </section>

  );
};

export default Stats;