import styled from 'styled-components'

export const TopView = styled.View`
  align-items: center;
  background-color: rgba(255,255,255,.2);
  border-radius: 20px;
  padding-horizontal: 30px;
  padding-vertical: 10px;
`

export const TitleText = styled.Text`
  color: white;
  font-size: 60px;
  font-family: fredoka-one-regular;
  `
  
  export const TextGreeting = styled.Text`
  color: white;
  font-size: 35px;
  margin-top: 20px
  font-family: Poppins-Regular;
`

export const StartButton = styled.TouchableOpacity`
  background-color: #7CF7F7;
  border-radius: 8px;
  padding-horizontal: 20px;
  padding-vertical: 7px;
  width: 140px;
  align-items: center;
  elevation: 10;
`
export const FirstButton = styled(StartButton)`
  background-color: rgb(255,	222,	85);
`
export const SecondButton = styled(StartButton)`
  background-color: rgb(111,	197,	189);
  color: white;
  justify-content: center;
`

export const TextInButton = styled.Text`
  font-size: 27px;
`
export const TextInFirstButton = styled(TextInButton)`
  color: white;
  font-family: federant-regular;
  `
export const TextInSecondButton = styled(TextInButton)`
  color: white;
  font-family: pangolin-regular;
  top:-6px
`
export const BottomText = styled(TextInButton)`
  color: white;
  background-color: rgba(13,	30,	24, .9);
  top:-6px;
  border-radius: 20px;
  padding-horizontal: 20px;
  padding-vertical: 30px;
  margin-horizontal: 20px;
  font-family: Raleway-Regular;
  text-align: center;
`

export const ScreenLayoutAligningView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
`
export const OptionsView = styled.View`
   flex-direction: row;
   justify-content: space-around;
   width: 350px;
   bottom: 40px;
`