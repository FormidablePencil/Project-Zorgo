import React, { createContext, useState, useReducer } from 'react'
import { View } from 'react-native'
import MatchingGame from '../drawerNavScreens/MatchingGame'

export const MatchingGameContext = createContext()

export function ContextMatchingGameProvider() { //~ we are creating reducers for all states. I just want to clean my codebase and to learn the way to arange my code
  const [matchingGameArray, setMatchingGameArray] = useState()
  const [tappedValue, setTappedValue] = useState()
  const { score, dispatchScore } = useReducer(scoreReducer, 0)
  const { cubesLeft, dispatchCubesLeft } = useReducer(cubesLeftReducer, 12)
  const [prettyBoxVisible, setPrettyBoxVisible] = useState() // not neccessary to see

  return (
    <MatchingGameContext.Provider value={{ cubesLeft, dispatchCubesLeft, score, dispatchScore }}>
      <MatchingGame />
    </MatchingGameContext.Provider>
  )
}

const cubesLeftReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_BY_2':
      const newState = state + 2
      console.log('hi from cubesLeftReducer')
      console.log(newState)
      console.log(action.payload)
      return newState
    case 'DELETE_VALUE_IN_STATE':
      return state
    default:
      return state
  }
}
const scoreReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_BY_100':
      const newStateIncre100 = state + 2
      console.log('hi from scoreReducer')
      console.log(newStateIncre100)
      console.log(action.payload)
      return newStateIncre100
    case 'INCREMENT_BY_1.2':
      const newStateIncremented = state * 1.2
      return newStateIncremented
    default:
      return state
  }
}