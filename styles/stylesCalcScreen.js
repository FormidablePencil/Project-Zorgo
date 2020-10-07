import styled from 'styled-components'
/* //@ positioning containers with the most topest style being the most outer parent */
export const OuterView = styled.View`
 flex: 1;
`
export const DisplayCalculator = styled.View`
  flex: .6;
  background-color: rgb(44,47,52);
  flex-direction: row;
  justify-content:flex-end;
  align-items: center;
  padding: 20px;
`
export const CalculatorView = styled.View`
  flex-direction: row ;
  flex: 1;
`
export const FirstCol = styled.View`
  flex: 3;
  flex-direction: column;
`
export const SecondCol = styled.View`
  flex: 1;
`
export const ColGrid3 = styled.View`
  flex-direction: row;
  height: 20%;
`
export const ColGrid2 = styled.View`
  flex-direction: row;
  width: 100%;
  height: 25%;
`
export const ViewOporators = styled.View`
  flex-direction: column;
  flex: 1;
`
export const CalcView = styled.View`
  flex-direction: row;
`

//@ TouchableOpacity
export const StandardCalcTouchable = styled.TouchableHighlight`
  flex: 1;
  justify-content: center;
  align-items: center;
  `

export const grayOverlayColor = 'rgb(176, 176, 176)'
export const DigitTouchable = styled(StandardCalcTouchable)`
  background-color: rgb(97,	100,	104);
  border-width: .5px;
`
export const variousTouchableOverlayColor = 'rgb(95,	96,	99)'
export const VariousTouchable = styled(StandardCalcTouchable)`
  background-color: rgb(66,  69,	74);
  border-width: .5px;
`

export const operatorsTouchableOverlayColor = 'rgb(199, 134, 52)'
export const OperatorsTouchable = styled(StandardCalcTouchable)`
  background-color: rgb(242,	162,	59);
  height: 20%;
  border-width: .5px;
`
export const DigitTouchableFor0 = styled(StandardCalcTouchable)`
  background-color: rgb(97,	100,	104);
  flex-grow: 2;
  height: 100%;
  border-width: .5px;
`

export const DigitTouchableForDot = styled(StandardCalcTouchable)`
  background-color: rgb(97,	100,	104);
  flex-grow: 1;
  height: 100%;
  border-width: .5px;
`

//@Text
export const TextStandard = styled.Text`
  color: white;
  font-size: 40px;
`
export const TextForNumbers = styled(TextStandard)`
  font-size: 40px;
`

export const CalcText = styled.Text`
  color: white;
  font-size: 40px;
`

