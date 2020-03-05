import { generateArrayOfNumbers } from '../pureLogic/logicMatchingGame'
import { RESET } from '../actionsTypes/types'

export const matchingGameReducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return generateArrayOfNumbers()
    default:
      return state
  }
}