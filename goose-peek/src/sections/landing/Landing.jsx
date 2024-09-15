import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import Navbar from '../navbar/Navbar.jsx';
import './landing.css';

const Landing = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <section className='landing_container'>
      <h1 className='title'>GOOSE PEEK</h1>
      <img id='logo' src={process.env.PUBLIC_URL + '/geese.jpg'} alt="logo" />
      <p className='description'>Are you ready to lock in my little goosling?</p>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Navbar />
    </section>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Landing;
