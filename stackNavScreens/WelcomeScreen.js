import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import space from '../assets/space.jpg'
import {
  StartButton,
  TitleText,
  TextInButton,
  ScreenLayoutAligningView,
  OptionsView,
  FirstButton,
  SecondButton,
  TextInFirstButton,
  TextInSecondButton,
  BottomText,
  TextGreeting,
  TopView
} from '../styles/stylesWelcomeScreen'
import { selectRandomSentenceToGreetWith, selectGreetingByTimeOfDay } from '../logic/generateGreetings';

export default function WelcomeScreen({navigation}) {
  const saying = selectRandomSentenceToGreetWith()
  const greeting = selectGreetingByTimeOfDay()

  function goToContentScreen() {
    navigation.navigate('ContentScreen')
  }

  return (
    <ImageBackground source={space} style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <ScreenLayoutAligningView>
        <TopView>
          <TitleText>Project Zorgo</TitleText>
          <TextGreeting>{greeting}</TextGreeting>
        </TopView>
        <OptionsView>
          <FirstButton onPress={goToContentScreen}>
            <TextInFirstButton>Jessie</TextInFirstButton>
          </FirstButton>
          <SecondButton onPress={goToContentScreen}>
            <TextInSecondButton>Jasmine</TextInSecondButton>
          </SecondButton>
        </OptionsView>
        <BottomText>{saying}</BottomText>
      </ScreenLayoutAligningView>
    </ImageBackground>
  );
}

{/* //@ add animations to the title */ }