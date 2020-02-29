import React, { useState, useRef, useEffect } from 'react'
import {
  TextStandard,
  VariousTouchable,
  ViewOporators,
  OperatorsTouchable,
  DigitTouchable,
  OuterView,
  FirstCol,
  SecondCol,
  DisplayCalculator,
  CalculatorView,
  ColGrid2,
  DigitTouchableFor0,
  DigitTouchableForDot,
  ColGrid3,
  TextForNumbers,
  variousTouchableOverlayColor,
  operatorsTouchableOverlayColor,
  grayOverlayColor,
  CalcView
} from '../styles/stylesCalcScreen'
import { Text, View } from 'react-native'
import DisplayInputedValues from './DisplayInputedValues'




export default function CalcComponent({ bundledStates, executeCalculator, numbersState, operatorsState }) {
  console.log(bundledStates)
  async function onPresshandler(valueOfElementPressed) {
    executeCalculator(valueOfElementPressed)
  }

  const ToucbableCalcDigit = ({ value }) => {
    return (
      <DigitTouchable
        underlayColor={grayOverlayColor}
        onPress={() => onPresshandler({ value })}>
        <TextForNumbers>{value}</TextForNumbers>
      </DigitTouchable>
    )
  }

  const TouchableCalcVarious = ({ value }) => {
    return (
      <VariousTouchable
        underlayColor={variousTouchableOverlayColor}
        onPress={() => onPresshandler({ value })}>
        <TextStandard>{value}</TextStandard>
      </VariousTouchable>
    )
  }
  const TouchableCalcOperators = ({ value }) => {
    return (
      <OperatorsTouchable
        underlayColor={operatorsTouchableOverlayColor}
        onPress={() => onPresshandler({ value })}>
        <TextStandard>{value}</TextStandard>
      </OperatorsTouchable>
    )
  }
  const DigitTouchableForDotOverlayColor = ({ value, value2 }) => {
    return (
      <>
        <DigitTouchableFor0
          underlayColor={grayOverlayColor}
          onPress={() => onPresshandler({ value })}>
          <TextStandard>{value}</TextStandard>
        </DigitTouchableFor0>
        <DigitTouchableForDot
          underlayColor={grayOverlayColor}
          onPress={() => onPresshandler({ value2 })}>
          <TextStandard>{value2}</TextStandard>
        </DigitTouchableForDot>
      </>
    )
  }

  function usePrevious(value) {
    const ref = useRef()
    useEffect(() => { //aka componentDidMount
      ref.current = value
    })
    return ref.current
  }
  
  const prevStatesNumber = usePrevious(bundledStates)
  let bundle = {}
  bundle['numbersState'] = numbersState
  bundle['operatorsState'] = operatorsState
  
  useEffect(() => { //aka componentDidMount
    console.log('7777')
    console.log(numbersState)
    console.log(bundle)
    console.log(operatorsState)
  }, [numbersState])
  useEffect(() => { //aka componentDidMount
    console.log('7777')
    console.log(numbersState)
    console.log(bundle)
    console.log(operatorsState)
  }, [operatorsState])

  return (
    <OuterView>

      <DisplayCalculator>
        {/* always rerender this compoent */}
        {/* {bundledStates ?
          <DisplayInputedValues
            bundledStates={bundledStates}
          />
          : null
        } */}
      </DisplayCalculator>
      <CalculatorView>

        <FirstCol>

          <ColGrid3>
            <TouchableCalcVarious value={'AC'} />
            <TouchableCalcVarious value={'+/-'} />
            <TouchableCalcVarious value={'%'} />
          </ColGrid3>

          <ColGrid3>
            <ToucbableCalcDigit value={7} />
            <ToucbableCalcDigit value={8} />
            <ToucbableCalcDigit value={9} />
          </ColGrid3>

          <ColGrid3>
            <ToucbableCalcDigit value={4} />
            <ToucbableCalcDigit value={5} />
            <ToucbableCalcDigit value={6} />
          </ColGrid3>

          <ColGrid3>
            <ToucbableCalcDigit value={1} />
            <ToucbableCalcDigit value={2} />
            <ToucbableCalcDigit value={3} />
          </ColGrid3>

          <ColGrid2>

            <DigitTouchableForDotOverlayColor value={0} value2={'.'} />
          </ColGrid2>
        </FirstCol>

        <SecondCol>
          <ViewOporators>
            <TouchableCalcOperators value={'/'} />
            <TouchableCalcOperators value={'x'} />
            <TouchableCalcOperators value={'-'} />
            <TouchableCalcOperators value={'+'} />
            <TouchableCalcOperators value={'='} />
          </ViewOporators>
        </SecondCol>
      </CalculatorView>
    </OuterView>
  )
}
