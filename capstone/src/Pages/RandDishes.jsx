import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { NavLink } from 'react-router-dom';



function RandDishes() {
    const [random, setRandom] = useState([]);

    const getRandom = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=50`
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
        <Splide options={{
          perPage: 1,
          pagination: false,
          gap: '5rem',
          }}>
            {random.map((item) => {
              return(
                <SplideSlide key={item.id}>
                  <Card>
                    <NavLink to={'/info/' + item.id}>
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                    </NavLink>
                  </Card>
                </SplideSlide>
              );
            })};
        </Splide>
      </StyledDiv>
      
    </div>
  )
}
const StyledDiv = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 2rem;
    left: 0;
    width: 30rem;
    height: 30rem;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export default RandDishes
