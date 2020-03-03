import styled from 'styled-components'
import { StyleSheet } from 'react-native'
import { theme } from './globalStyles';

export const prettyLinearGradient = {   /* //~ now to make it look nice with linear gradient */
  0: {
    linearGradient: '#eb61d4',
    linearGradient1: '#ff78fb',
    linearGradient2: '#ef92ff',
  },
  1: {
    linearGradient: '#e6c10a',
    linearGradient1: '#e39c31',
    linearGradient2: '#e0720b',
  },
  2: {
    linearGradient: '#516cc4',
    linearGradient1: '#7280f7',
    linearGradient2: '#a58eff',
  },
  3: {
    linearGradient: '#e5fc36',
    linearGradient1: '#c9de2e',
    linearGradient2: '#93db0c',
  },
  4: {
    linearGradient: '#db007c',
    linearGradient1: '#ff2873',
    linearGradient2: '#ff454b',
  },
  5: {
    linearGradient: '#abfffc',
    linearGradient1: '#77dbff',
    linearGradient2: '#4ac6ff',
  }
};

export const VerticallyAlign = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const HorizontalAlign = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
export const PrettyBoxes2 = styled.TouchableOpacity`
  background-color: ${props => typeof props.color === 'number' ? props.theme[props.color] : 'black'};
  width: 110px;
  height: 110px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const AlignContent = styled.View`
  flex: 1;
  background-color: ${props => props.theme[props.theme.current].bg.bgColor};
  justify-content: center;
  align-items: center;
`

export const RandomizeBtn = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: gray; 
`
export const BoxShadowWorkAround = styled.View`
  margin: 3px; 
  elevation: 5;
  background-color: ${props => props.theme[props.theme.current].bg.bgColor}; 
  width: 94.5%;
  height: 89.5%;
  border-radius: 15px;
`
export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  position: absolute;
  top: -80px;
`
export const RowItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`


export const Shuffle = styled.Text`
  color: white;
  font-size: 25px;
`

// export const prettyBox2 = styled.Text`
//   align-items: center; justify-content: center; border-radius: 15; width: 110; height: 110; margin: 3;
// `A


export const styles = StyleSheet.create({
  prettyBox: {
    alignItems: 'center', justifyContent: 'center', borderRadius: 15, width: 110, height: 110,
  },
  littleMargin: {
    margin: 3
  }
})
