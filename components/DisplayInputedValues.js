import React from 'react'
import { View, Text } from 'react-native'
import { CalcView, CalcText } from '../styles/stylesCalcScreen'

export const DisplayInputedValues = ({ bundledStates }) => {
  const numbersState = bundledStates.numbersState
  const operatorsState = bundledStates.operatorsState
  const calculated = bundledStates.calculated
  console.log(typeof !calculated)
  if (numbersState && !operatorsState && !calculated) {
    const mappedOutValuesState = Object.values(numbersState).map((value, key) => {
      return (
        <View key={key}>
          <CalcText>{value}</CalcText>
        </View>
      )
    })
    return mappedOutValuesState
  } else if (operatorsState && !numbersState && !calculated) {
    const mappedOutOperatorState = Object.values(operatorsState).map((operator, key) => {
      return (
        <View key={key}>
          <CalcText>{operator}</CalcText>
        </View>
      )
    })
    return mappedOutOperatorState
  } else if (operatorsState && numbersState && !calculated) {
    const mappedOutOperatorAndValuesState = Object.values(numbersState).map((value, key) => {
      return (
        <CalcView key={key}>
          <CalcText>{value}</CalcText>
          {operatorsState ?
            <CalcText>{operatorsState[key]}</CalcText>
            : null
          }
        </CalcView>
      )
    })
    return mappedOutOperatorAndValuesState
  } else if (calculated) {
    return (
      <CalcView>
        <CalcText>{calculated}</CalcText>
      </CalcView>
    )
  } else { return null }
}

export default DisplayInputedValues