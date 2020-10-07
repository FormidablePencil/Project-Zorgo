import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from './stackNavScreens/WelcomeScreen'
import * as Font from 'expo-font'; //This is built in to expo and it help us to load custom font's we've downloaded
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components'
import ContentScreen from './stackNavScreens/ContentScreen';
import { theme } from './styles/globalStyles';
import Test from './stackNavScreens/Test';

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
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {fontLoaded === true ?
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="ContentScreen" component={ContentScreen} />
            <Stack.Screen name="Test" component={Test} />
            {/* This is where the pages belong */}
          </Stack.Navigator>
          : null
        }
      </NavigationContainer>
    </ThemeProvider>
  );
}
