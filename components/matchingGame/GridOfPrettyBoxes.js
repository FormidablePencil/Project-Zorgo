
import React from 'react'
import { View } from 'react-native'
import { HorizontalAlign, prettyLinearGradient, styles, BoxShadowWorkAround } from '../../styles/stylesMatchingGame'
import { TextStandard } from '../../styles/globalStyles'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler'

export const GridOfPrettyBoxes = ({ onPressHandlerPrettyBox, prettyBoxVisible, matchingGameArray }) =>
  <View>
    <PrettyBoxesRow
      onPressHandlerPrettyBox={onPressHandlerPrettyBox}
      prettyBoxVisible={prettyBoxVisible}
      item={matchingGameArray[0]} box={0}
      item1={matchingGameArray[1]} box1={1}
      item2={matchingGameArray[2]} box2={2}
    />
    <PrettyBoxesRow
      onPressHandlerPrettyBox={onPressHandlerPrettyBox}
      prettyBoxVisible={prettyBoxVisible}
      item={matchingGameArray[3]} box={3}
      item1={matchingGameArray[4]} box1={4}
      item2={matchingGameArray[5]} box2={5}
    />
    <PrettyBoxesRow
      onPressHandlerPrettyBox={onPressHandlerPrettyBox}
      prettyBoxVisible={prettyBoxVisible}
      item={matchingGameArray[6]} box={6}
      item1={matchingGameArray[7]} box1={7}
      item2={matchingGameArray[8]} box2={8}
    />
    <PrettyBoxesRow
      onPressHandlerPrettyBox={onPressHandlerPrettyBox}
      prettyBoxVisible={prettyBoxVisible}
      item={matchingGameArray[9]} box={9}
      item1={matchingGameArray[10]} box1={10}
      item2={matchingGameArray[11]} box2={11}
    />
  </View>


export const PrettyBoxesRow = ({ item, item1, item2, box, box1, box2, prettyBoxVisible, onPressHandlerPrettyBox }) => {
  return (
    <HorizontalAlign>
      <PrettyBoxes item={item} whatBox={box} prettyBoxVisible={prettyBoxVisible} onPressHandlerPrettyBox={onPressHandlerPrettyBox} />
      <PrettyBoxes item={item1} whatBox={box1} prettyBoxVisible={prettyBoxVisible} onPressHandlerPrettyBox={onPressHandlerPrettyBox} />
      <PrettyBoxes item={item2} whatBox={box2} prettyBoxVisible={prettyBoxVisible} onPressHandlerPrettyBox={onPressHandlerPrettyBox} />
    </HorizontalAlign >
  )
}

export function PrettyBoxes(props) { //show down here prettyBoxVisibility obj and onPressHandlerPrettyBox //~ the put to seperate file
  const item = props.item
  const whatBox = props.whatBox
  const prettyBoxVisible = props.prettyBoxVisible
  const onPressHandlerPrettyBox = props.onPressHandlerPrettyBox
  return (
    <View>
      {prettyBoxVisible[whatBox].visible ?
        <View style={{}}>
          <BoxShadowWorkAround>
            <TouchableOpacity style={{}} onPress={() => onPressHandlerPrettyBox(item, whatBox)}>
              <LinearGradient
                colors={[prettyLinearGradient[item]['linearGradient'], prettyLinearGradient[item]['linearGradient1'], prettyLinearGradient[item]['linearGradient2']]}
                style={styles.prettyBox}
                start={[.6, .2]}
                end={[.1, .7]} >

                <TextStandard>
                  {props.children}
                </TextStandard>
              </LinearGradient>
            </TouchableOpacity>
          </BoxShadowWorkAround>
        </View>
        : <View style={{ ...styles.prettyBox, ...styles.littleMargin }}></View>
      }
    </View>
  )
}

export default GridOfPrettyBoxes