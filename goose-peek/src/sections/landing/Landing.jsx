import React, {useState, useEffect} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import  Navbar from '../navbar/Navbar.jsx';
import './landing.css';
// import background from '../../../public/background.js';

const Landing = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // useEffect(()=>{
  //   console.log ("hello world");
  //   background()
  // }, [])

  return (
    <section id='landing_container'>
        <h1>GOOSE PEEK</h1>
        <img id='logo' src={process.env.PUBLIC_URL + '/geese.jpg'} alt="logo" />
        <p>Are you ready to lock in my little goosling?</p>
        <View style={styles.container}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Navbar/>
    </section>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Landing;