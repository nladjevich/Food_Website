import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Random from '../Components/Random'
import IngredientsBtn from '../Components/IngredientsBtn';
import IngredientSearch from '../Components/IngredientSearch';




function Home() {
  const [random, setRandom] = useState([]);

  const fetchImage = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`);
    const randomData = await api.json();
    setRandom(randomData.recipes);
  }

  useEffect(() => {
    fetchImage();
    console.log(random);
  }, []);


  return (
    <StyledDiv>
      <div>
        <h1>Find Out About Your Favorite Food!</h1>
        <p>Search for foods in the search bar to find out vast information about foods that you enjoy!</p>
      </div>
        <Random></Random>
        <p>Or press the button to recive a random dish from us.</p>
        <div>
          <IngredientSearch></IngredientSearch>
        </div>
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
