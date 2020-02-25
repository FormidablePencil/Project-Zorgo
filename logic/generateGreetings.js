export function selectRandomSentenceToGreetWith() {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber)
  switch (randomNumber) {
    case 0:
      return 'Your stuff are ready for you.'
    case 1:
      return 'everything is all set.'
    case 2:
      return 'Follow your dreams.'
    case 3:
      return 'Wish you bundles of joy.'
    case 4:
      return 'Goodluck with all your endeavors.'
    case 5:
      return 'Shoot for the stars and you\'ll land on the moon.'
    case 6:
      return 'Make it rain pots of gold.'
    case 7:
      return 'Ambition is your middle name.'
    case 8:
      return 'Anything worth doing is worth doing well.'
    case 9:
      return 'The kingdom of God is within you. (Luke 17:21).'
    default:
      return 'Don\'t wait for oppertunity, create it.'
  }
}

export function selectGreetingByTimeOfDay() {
  const hourOfDay = getHourOfDay()
  console.log(hourOfDay)
  switch (true) {
    case hourOfDay >= 5 && hourOfDay < 12:
      return 'Good morning!' //5:00 a.m. to 12:00 p.m
    case hourOfDay >= 12 && hourOfDay < 18:
      return 'Good afternoon!' //12:00 p.m. to 6:00 p.m
    case hourOfDay >= 18 || hourOfDay >= 0 && hourOfDay < 5:
      return 'Good evening!' //it\'s after 6 p.m.
    default:
      return 'Err, one of the conditionals failed in selectGreetingByTimeOfDay()'
  }
}

export function getHourOfDay() {
  // const current = Date.now();
  const currentTime = new Date();
  const currentMinute = currentTime.getHours()
  return currentMinute
}
