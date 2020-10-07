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
      <Drawer.Screen name="CalculatorScreen" component={CalculatorScreen} />
      <Drawer.Screen name="MatchingGame" component={ContextMatchingGameProvider} /> 
      <Drawer.Screen name="TictacktoeScreen" component={TictacktoeScreen} /> 
      <Drawer.Screen name="TodoListsScreen" component={TodoListsScreen} /> 
    </Drawer.Navigator>
  )
}
//~ what's left is a todo list and add the productivity tracker to this project