import React, { useState, useEffect } from 'react';
import {  } from 'react-native-gesture-handler';
import { Text, TouchableOpacity, View } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0); //~ we'll create a context
  const [isActive, setIsActive] = useState(false);

  function toggle() { //Starts
    setIsActive(!isActive);
  }

  function reset() { //rests
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <View>
      <View>
        <Text style={{color: 'white'}}>
          {seconds}s
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={toggle} style={{backgroundColor: 'aqua'}}>
          <Text>
            {isActive ? 'Pause' : 'Start'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset} style={{backgroundColor: 'aqua'}}>
          <Text>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Timer;