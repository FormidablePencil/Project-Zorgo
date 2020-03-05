import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CalculatorScreen from '../drawerNavScreens/CalcScreen'
import TodoListsScreen from '../drawerNavScreens/TodoListsScreen'
import TictacktoeScreen from '../drawerNavScreens/TictacktoeScreen'
import { ContextMatchingGameProvider } from '../context/ContextMatchingGame'

const Drawer = createDrawerNavigator()

export default function ContentScreen() {
  return ( 
    <Drawer.Navigator initialRouteName="seconddd">
      <Drawer.Screen name="MatchingGame" component={ContextMatchingGameProvider} /> 
      <Drawer.Screen name="CalculatorScreen" component={CalculatorScreen} />
      {/* I believe I've already done this one so copy, paste and modify for time efficiency */}
      <Drawer.Screen name="TictacktoeScreen" component={TictacktoeScreen} /> 
      {/* I've already done this one so copy, paste and modify for time efficiency */}
      <Drawer.Screen name="TodoListsScreen" component={TodoListsScreen} /> 
      {/* I've already done this one so copy, paste and modify for time efficiency */}
    </Drawer.Navigator>
  )
}
{/* <Text>This page will contain a tab navigation that's full of awesome functionalities</Text> */}
