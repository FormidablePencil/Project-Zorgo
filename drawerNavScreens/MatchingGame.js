import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { VerticallyAlign } from '../styles/stylesMatchingGame'
import { AlignContent, RandomizeBtn, Shuffle } from '../styles/stylesMatchingGame'
import { Dimensions } from 'react-native'
import Timer from '../components/Timer'
import GridOfPrettyBoxes from '../components/matchingGame/GridOfPrettyBoxes'
import { MiscRow } from '../components/matchingGame/MiscRow'

const width = Math.round(Dimensions.get('window').width);

export default function MatchingGame() {
  //@ This is going to be a better game. It'll be a game in which you try to type as fast as possibly can and every completion adds a certian amount of seconds.
  //@ every correct +100 points (or depending on the color + certian amount of points), add more time to timer and to add a sense of ergency (thus addiction) every round won randomize multiple times.
  //~ all I got left to do is create a time and a scoreboard... Which will involve the backend
  //? when you can start the game, incrementing timer if corrct and deduction if not and when countdown is over that's when we are done with the app. Backend stuff is later on.

  // Now how do we ranomdly assign a color and a key to every square?

  const [matchingGameArray, setMatchingGameArray] = useState()
  const [tappedValue, setTappedValue] = useState()
  const [score, setScore] = useState(0)
  const [cubesLeft, setCubesLeft] = useState(12)
  const [prettyBoxVisible, setPrettyBoxVisible] = useState() // not neccessary to see


  //~ typically we'd use a reducer in which we'd set and modify state. but since there were few to little components I supposed I could go without it... second thoughts, I think it'll only be right and clean if I did use a reducer. Let's practive with reducers a little more I guess 

  //! read my code. The think I have unneccessay code in this file

  useEffect(() => {
    if (!matchingGameArray) {
      setMatchingGameArray(generateArrayOfNumbers())
      resetPrettyBoxVisibility()
    }
  })
  useEffect(() => {
    if (cubesLeft === 0) {
      reset()
      setCubesLeft(12)
    }
  }, [cubesLeft])
  function generateArrayOfNumbers() {
    let array1 = Array.from(Array(6).keys())
    let array2 = Array.from(Array(6).keys())
    let array = [...array1, ...array2]
    for (let i = 0; i < 12; i++) {
      const shufflingIndex = randomNumGenerator()
      const randomNum = randomNumGenerator()
      const valuePopped = array[shufflingIndex]
      array = array.filter((number, index) => index !== shufflingIndex) //This is how you'd delete in js
      array.splice(randomNum, 0, valuePopped)
    }
    return array
  }
  function randomNumGenerator() {
    return Math.floor(Math.random() * 12)
  }
  function onPressHandlerPrettyBox(value, whatBox) {
    if (prettyBoxVisible[whatBox].pressable === true) {
      testIfTappedCorrectMatching(value, whatBox)
    }
  }
  function makeElementUnpressable(whatBox) {
    let newState = prettyBoxVisible
    newState[whatBox].pressable = false
    setPrettyBoxVisible(newState)
  }

  function testIfTappedCorrectMatching(value, whatBox) { //@ I turn ifs to switches for cleaner code. Can I make even smaller functions out of what's left?
    if (tappedValue && value === tappedValue.value) {
      if (score <= 100) {
        setScore(score + 10)
      } else {
        const newScore = Math.floor(score * 1.2)
        setScore(newScore)
      }
      setTappedValue()
      let newState = prettyBoxVisible
      const firstMatchingBox = matchingGameArray.indexOf(value)
      const SecondMatchingBox = matchingGameArray.lastIndexOf(value)
      newState[firstMatchingBox].visible = false
      newState[SecondMatchingBox].visible = false
      setPrettyBoxVisible(newState)
      setCubesLeft(cubesLeft - 2)
    } else if (tappedValue && value !== tappedValue.value) {
      resetPressible()
      setTappedValue()
    } else if (!tappedValue) {
      makeElementUnpressable(whatBox)
      setTappedValue({ value })
    }
  }

  function resetPrettyBoxVisibility() {
    const array = []
    for (let i = 0; i < 12; i++) {
      array[i] = { visible: true, pressable: true }
      setPrettyBoxVisible(array)
    }
  }
  function resetPressible() {
    for (let i = 0; i < Object.keys(prettyBoxVisible).length; i++) {
      prettyBoxVisible[i].pressable = true
    }
  }
  function reset() {
    resetPrettyBoxVisibility()
    setMatchingGameArray(generateArrayOfNumbers())
    setCubesLeft(12)
  }



  return (
    <AlignContent>
      {matchingGameArray ?
        <View>
          <MiscRow score={score} />
          <VerticallyAlign style={{ height: width * 1.33 }}>
            <GridOfPrettyBoxes matchingGameArray={matchingGameArray} onPressHandlerPrettyBox={onPressHandlerPrettyBox} prettyBoxVisible={prettyBoxVisible} />
          </VerticallyAlign>
        </View>
        : null
      }
    </AlignContent>
  )
}

//! seperate into file PrettyBoxesRow and simply pass in the varaibles. Call it GridOfBoxes.js
//? how would I make a grid with wrapp without the need of doing what I did next time?
//? learn es6 stuff. There're alot very useful things I'm perhaps missing out on


  //@ when done with the tasks above we'll leave this project to work on other ones so to further strengthen js skills and when everything programatic done on all of my projects and it's all nice and clean then we are diving all into animations.