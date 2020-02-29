import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from './stackNavScreens/WelcomeScreen'
import * as Font from 'expo-font'; //This is built in to expo and it help us to load custom font's we've downloaded
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContentScreen from './stackNavScreens/ContentScreen';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadingFonts() {
      await Font.loadAsync({
        'fredoka-one-regular': require('./assets/fonts/FredokaOne-Regular.ttf'),
        'federant-regular': require('./assets/fonts/Federant-Regular.ttf'),
        'pangolin-regular': require('./assets/fonts/Pangolin-Regular.ttf'),
        'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-SemiBold.ttf'),
      });
      setFontLoaded(true);
    }
    loadingFonts()
  }, [])
  
  return (
    <NavigationContainer>
      {fontLoaded === true ?
        <Stack.Navigator
          screenOptions={{
            title: '',
            headerShown: false,
          }}>
          <Stack.Screen name="ContentScreen" component={ContentScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          {/* This is where the pages belong */}
        </Stack.Navigator>
        : null
      }
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View styles={{ backgroundColor: 'green', height: 200, weidth: 200 }} onPress={() => console.log(fontLoaded)}></View>
    </View>
  );
}
