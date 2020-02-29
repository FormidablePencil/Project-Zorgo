import React, { useState } from 'react'
// import determineAndMofifyOutput from '../logic/calculator'
import CalcComponent from '../components/CalcComponent'

export default function CalculatorScreen() { //lets perhaps take all this calculor logic and put it into ScreenCalculations after we create it... perhpas bettee not cause then we'd have to pass things down via props and maybe even pass things back up. That's messy, although it may be benifitial to create and store calculator logic in parent of this component
  // const [numbersState, setNumbersState] = useState()
  // const [operatorsState, setOperatorsState] = useState()
  const [bundledStates, setBundledStates] = useState() //~ use effect only seems to listen to one variable change. So I've decided upon bundling both states into one and push it through the compoennts. Now I must modify my code for it to work properly. After that we are nearly done. All there will be left is implementing the calculate function and track history functionality

  function executeCalculator(value) {
    calculator(value)
  }

  async function calculator(valueOfElementPressed) {
    const value = Object.values(valueOfElementPressed)[0]
    let numbersState = {}
    if (bundledStates) {
      console.log('ghghg')
      numbersState = bundledStates.numbersState
    }
    let operatorsState = {}
    if (bundledStates) {
      console.log('ghghg')
      operatorsState = bundledStates.operatorsState
    }
      switch (true) {
      case typeof value === 'number' && !numbersState:
        const inputedValueInt = parseInt(value)
        let numbersState3 = { 0: inputedValueInt }
        setBundledStates({numbersState3})
        break
      case typeof value === 'number' && !operatorsState:
        const returned = concatStateValueWithInputedValue(value)
        let numbersState2 = {[0]: returned}
        setBundledStates({numbersState2})
        break
      case typeof value === 'number' && typeof operatorsState === 'object':
        const returned2 = concatStateValueWithInputedValue(value)
        numbersState[Object.values(operatorsState).length] = returned2
        setBundledStates({bundledStates})
        break
      case value === '/' || value === 'x' || value === '-' || value === '+' || value === '%':
        if (operatorsState && Object.values(operatorsState).length <= Object.values(numbersState).length) {
          operatorsState[Object.keys(operatorsState).length] = value
          setBundledStates(bundledStates)
        } else if (operatorsState && Object.values(operatorsState).length <= Object.values(numbersState).length) {
          //tapped 2+ operators consecutively. Don't do anything here
        } else if (!bundledStates.peratorsState) {
          let operatorsState = {[0]: value}
          setBundledStates(operatorsState)
        }
        break
      case value === '+/-':
        //turn current value to + or - (toggle)
        let key = ''
        if (operatorsState) {
          key = Object.values(operatorsState).length
        } else {
          key = 0
        }
        const newNumber = numbersState[key] * -1
        numbersState[key] = newNumber
        SetBundledStates(bundledStates)
        break
      case value === 'AC':
        setBundledState()
        break
      case value === '=':
        calculate()
        console.log("must calculate")
        break
    }
  }


  function concatStateValueWithInputedValue(inputedValue) { //! there are 2 functions in here. Concatinating state value to inputed value, retruning inputed value if no state value
    const valueString = inputedValue.toString()
    let numbersState = {}
    if (bundledStates) {
      numbersState = bundledStates.numbersState
    }
    let operatorsState = {}
    if (bundledStates) {
      operatorsState = bundledStates.operatorsState
    }
    let stringNewValue
    switch (true) {
      case !numbersState:
        stringNewValue = valueString
        break
      case numbersState && !operatorsState:
        stringNewValue = '' + numbersState[0] + valueString
        break
      case !numbersState[Object.values(operatorsState).length]:
        stringNewValue = valueString
        break
      case typeof numbersState[Object.values(operatorsState).length] === 'number': //strangely to equals to false when only evaluating (bersState[Object.values(operatorsState).length]) so this was the work around
        stringNewValue = '' + numbersState[Object.keys(operatorsState).length] + valueString
        break
    }
    const newIntValue = parseInt(stringNewValue)
    return newIntValue
  }

  function calculate() {
  }

  return (
    <CalcComponent
      executeCalculator={executeCalculator}
      bundledStates={bundledStates}
    />
  )
}

