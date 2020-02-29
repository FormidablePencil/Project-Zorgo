import React from 'react'
import { View, Text } from 'react-native'
import { CalcView, CalcText } from '../styles/stylesCalcScreen'

export const DisplayInputedValues = ({ bundledStates }) => {

  console.log('llll')
    console.log('done did it again')
  console.log('llll')
  bundledStates.numbersState = 'd'
  console.log(bundledStates.numbersState)
  if (bundledStates.numbersState && !bundledStates.operatorsState) {
    const mappedOutValuesState = Object.values(bundledStates.numbersState).map((value, key) => {
      return (
        <View key={key}>
          <CalcText>{value}</CalcText>
        </View>
      )
    })
    return mappedOutValuesState
  } else if (bundledStates.operatorsState && !bundledStates.numbersState) {
    const mappedOutOperatorState = Object.values(bundledStates.operatorsState).map((operator, key) => {
      return (
        <View key={key}>
          <CalcText>{operator}</CalcText>
        </View>
      )
    })
    return mappedOutOperatorState
  } else if (bundledStates.operatorsState && bundledStates.numbersState) {
    const mappedOutOperatorAndValuesState = Object.values(bundledStates.numbersState).map((value, key) => {
      return (
        <CalcView key={key}>
          <CalcText>{value}</CalcText>
          {bundledStates.operatorsState ?
            <CalcText>{bundledStates.operatorsState[key]}</CalcText>
            : null
          }
        </CalcView>
      )
    })
    return mappedOutOperatorAndValuesState
  }
  else { return null }
}

export default DisplayInputedValues