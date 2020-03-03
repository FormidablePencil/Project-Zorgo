import React from 'react'
import { Shuffle, RandomizeBtn } from '../../styles/stylesMatchingGame'
import Timer from '../Timer'
import { Row, RowItem } from '../../styles/stylesMatchingGame'

export const MiscRow = ({ score }) => {
  return (
    <Row style={{ flexDirection: 'row' }}>{/* //@ this should be a seperate component of it's own. */}
      <RowItem>
        <Timer />
      </RowItem>
      <RowItem>
        <Shuffle>{score}</Shuffle>
      </RowItem>
      {/* <RowItem>
        <RandomizeBtn onPress={() => { reset() }}>
          <Shuffle>R</Shuffle>
        </RandomizeBtn>
      </RowItem> */}
    </Row>
  )
}
