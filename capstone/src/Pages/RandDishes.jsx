import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import '@splidejs/splide/dist/css/splide.min.css';



function RandDishes() {
    const [random, setRandom] = useState([]);

    const getRandom = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=100`
        );
        const data = await api.json();
        setRandom(data.recipes);
    }

    useEffect(() => {
        getRandom();
    }, []);

  return (
    <div>
      <StyledDiv>
        {random.map((item) => {
          return(
          <StyledDiv>
            <p>{item.title}</p>
            <img src={item.image} alt={item.title} />
          </StyledDiv>
          )
        })};
      </StyledDiv>
    </div>
  )
}
const StyledDiv = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
`
export default RandDishes
