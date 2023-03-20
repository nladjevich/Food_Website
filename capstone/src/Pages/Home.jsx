import React from 'react'
import styled from 'styled-components'
import Random from '../Components/Random'



function Home() {
  return (
    <StyledDiv>
      <div>
        <h1>Find Out About Your Favorite Food!</h1>
        <p>Search for foods in the search bar to find out vast information about foods that you enjoy!</p>
      </div>
        <Random></Random>
        <p>Or press the button to recive a random dish from us.</p>

    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 1 rem;
  text-align: center;
  h1 {
    margin: 1 rem;
  }
`

export default Home
