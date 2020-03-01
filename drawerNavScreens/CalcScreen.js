import React, { useState, useRef, useEffect } from 'react'
// import determineAndMofifyOutput from '../logic/calculator'
import CalcComponent from '../components/CalcComponent'

export default function CalculatorScreen() { //lets perhaps take all this calculor logic and put it into ScreenCalculations after we create it... perhpas bettee not cause then we'd have to pass things down via props and maybe even pass things back up. That's messy, although it may be benifitial to create and store calculator logic in parent of this component
  // const [numbersState, setNumbersState] = useState()
  // const [operatorsState, setOperatorsState] = useState()
  const [bundledStates, setBundledStates] = useState({ numbersState: {}, operatorsState: {} })
  const [clear, setClear] = useState('C')

  function executeCalculator(value) {
    calculator(value)
  }

  async function calculator(valueOfElementPressed) {
    const value = Object.values(valueOfElementPressed)[0]
    let numbersState = {}
    if (typeof bundledStates.numbersState !== 'undefined') {
      numbersState = bundledStates.numbersState
    }
    let operatorsState = {}
    if (typeof bundledStates.operatorsState !== 'undefined') {
      operatorsState = bundledStates.operatorsState
    }
    switch (true) { //! contains two seperate functions. If number then execute... if else then execute... if '=' then calculator
      case typeof value === 'number' && !numbersState:
        const inputedValueInt = parseInt(value)
        let numbersState3 = { 0: inputedValueInt }
        setBundledStates({ numbersState: numbersState3 })
        if (clear !== 'C') {
          setClear('C')
        }
        break
      case typeof value === 'number' && !operatorsState:
        const returned = concatStateValueWithInputedValue(value)
        let numbersState2 = { [0]: returned }
        setBundledStates({ numbersState: numbersState2 })
        if (clear !== 'C') {
          setClear('C')
        }
        break
      case typeof value === 'number' && typeof operatorsState === 'object' && numbersState[Object.keys(numbersState).find(key => numbersState[key] === 'nope!!')] !== 'nope!!':
        console.log(numbersState[Object.keys(numbersState).find(key => numbersState[key] === 'nope!!')] === 'nope!!')
        const returned2 = concatStateValueWithInputedValue(value)
        numbersState[Object.values(operatorsState).length] = returned2
        setBundledStates({ numbersState, operatorsState: bundledStates.operatorsState })
        if (clear !== 'C') {
          setClear('C')
        }
        break
      case typeof value === 'number' && numbersState[Object.keys(numbersState).find(key => numbersState[key] === 'nope!!')] === 'nope!!' && !Object.values(operatorsState).length >= Object.values(numbersState).length: //! the power of arrow funcitons. Got to crach it sometime
        numbersState[Object.keys(numbersState).find(key => numbersState[key] === 'nope!!')] = value
        setBundledStates({ numbersState, operatorsState })
        if (clear !== 'C') {
          setClear('C')
        }
        break
      case typeof value === 'number' && numbersState[Object.keys(numbersState).find(key => numbersState[key] === 'nope!!')] === 'nope!!' && Object.values(operatorsState).length >= Object.values(numbersState).length: //! the power of arrow funcitons. Got to crach it sometime
        numbersState[Object.keys(numbersState).find(key => numbersState[key] === 'nope!!')] = value
        delete operatorsState[Object.values(operatorsState).length - 1]
        console.log("success??")
        setBundledStates({ numbersState, operatorsState })
        if (clear !== 'AC') {
          setClear('AC')
        }
        break

      case value === '/' || value === 'x' || value === '-' || value === '+' || value === '%' || value === '%':
        if (Object.values(bundledStates.operatorsState)[0] && Object.values(operatorsState).length < Object.values(numbersState).length) {
          console.log('hhhh')
          let newOperatorsState = bundledStates.operatorsState
          newOperatorsState[Object.values(bundledStates.operatorsState).length] = value
          setBundledStates({ operatorsState: newOperatorsState, numbersState: bundledStates.numbersState })
          console.log(operatorsState)
        } else {
          console.log('****')
          let newOperatorsState = bundledStates.operatorsState
          newOperatorsState[0] = value
          setBundledStates({ operatorsState: newOperatorsState, numbersState: bundledStates.numbersState })
          console.log(operatorsState)
        }
        break
      case value === '+/-':
        //turn current value to + or - (toggle)
        if (bundledStates.numbersState[0] !== undefined) {
          const key = Object.values(bundledStates.numbersState).length - 1
          let numbersState = bundledStates.numbersState
          const newNumber = Object.values(bundledStates.numbersState)[key] * -1
          numbersState[key] = newNumber
          setBundledStates({ numbersState, operatorsState: bundledStates.operatorsState })
        } else {
          console.log('no number is 0th place of numbersState')
        }
        break
      case value === 'C':
        console.log(numbersState)
        let deletedLastValueInNumbersState = numbersState
        let key = ''
        if (numbersState[0]) {
          key = Object.values(numbersState).length - 1
        } else {
          key = 0
        }
        setClear('AC')
        console.log(clear)
        deletedLastValueInNumbersState[key] = ''
        setBundledStates({ numbersState: deletedLastValueInNumbersState, operatorsState })
        break
      case value === 'AC':
        setBundledStates({ numbersState: {}, operatorsState: {} })
        break
      case value === '=':
        if(Object.values(numbersState).length === Object.values(operatorsState).length){
          delete operatorsState[Object.values(operatorsState).length -1]
        }
        const calculated = calculate() 
        setBundledStates({calculated, operatorsState, numbersState}) //@ then send data off to a new object and whip this state. That'll be the history and the end of this project. All that's left is the cleanup. This code is so messy, peeyou! There's also the decimal place to finsh off with
        break
    }
    if (!bundledStates.numbersState[0] && !bundledStates.operatorsState[0]) {
      setClear('AC')
    }
    if (value !== 'C' && clear !== 'C' && clear !== 'AC') {
      setClear('C')
    }
  }


  function concatStateValueWithInputedValue(inputedValue) { //! there are 2 functions in here. Concatinating state value to inputed value, retruning inputed value if no state value
    const valueString = inputedValue.toString()
    let numbersState = {}
    if (typeof bundledStates.numbersState !== 'undefined') {
      numbersState = bundledStates.numbersState
      console.log(numbersState)
    }
    let operatorsState = {}
    if (typeof bundledStates.operatorsState !== 'undefined') { 
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
    let calculatedValue = ''
    const multiplied = multiplication()
    const divided = division(multiplied)
    const remainder = modulus(divided)
    const added = addition(remainder)
    const subtracted = subtraction(added)
    calculatedValue = subtracted
    console.log(subtracted)
    return calculatedValue
  }

  function multiplication() {
    let value = ''
    for (let i = 0; i <= Object.values(bundledStates.operatorsState).length; i++) { 
      if (bundledStates.operatorsState[i] === 'x' && !value) {
        value = bundledStates.numbersState[i] * bundledStates.numbersState[i + 1]
      } else if (bundledStates.operatorsState[i] === 'x' && value) {
        value = value * bundledStates.numbersState[i + 1]
      }
    }
    return value
  }
  function division(newValue) {
    let value = newValue
    for (let i = 0; i <= Object.values(bundledStates.operatorsState).length; i++) { 
      if (bundledStates.operatorsState[i] === '/' && !value) {
        value = bundledStates.numbersState[i] / bundledStates.numbersState[i + 1]
      } else if (bundledStates.operatorsState[i] === '/' && value) {
        value = value / bundledStates.numbersState[i + 1]
      }
    }
    return value
  }
  function modulus(newValue) {
    let value = newValue
    for (let i = 0; i <= Object.values(bundledStates.operatorsState).length; i++) { 
      if (bundledStates.operatorsState[i] === '%' && !value) {
        value = bundledStates.numbersState[i] % bundledStates.numbersState[i + 1]
      } else if (bundledStates.operatorsState[i] === '%' && value) {
        value = value % bundledStates.numbersState[i + 1]
      }
    }
    return value
  }
  function addition(newValue) {
    let value = newValue
    for (let i = 0; i <= Object.values(bundledStates.operatorsState).length; i++) { 
      if (bundledStates.operatorsState[i] === '+' && !value) {
        value = bundledStates.numbersState[i] + bundledStates.numbersState[i + 1]
      } else if (bundledStates.operatorsState[i] === '+' && value) {
        value = value + bundledStates.numbersState[i + 1]
      }
    }
    return value
  }
  function subtraction(newValue) {
    let value = newValue
    for (let i = 0; i <= Object.values(bundledStates.operatorsState).length; i++) { 
      if (bundledStates.operatorsState[i] === '-' && !value) {
        value = bundledStates.numbersState[i] - bundledStates.numbersState[i + 1]
      } else if (bundledStates.operatorsState[i] === '-' && value) {
        value = value - bundledStates.numbersState[i + 1]
      }
    }
    return value
  }

  return (
    <CalcComponent
      clear={clear}
      executeCalculator={executeCalculator}
      bundledStates={bundledStates}
    />
  )
}

