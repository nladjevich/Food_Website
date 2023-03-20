import React from 'react'
import { useState, useEffect } from 'react'
import { Params, useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '@splidejs/splide/css';

/*function Similar() {
    let params = useParams({});

    const [similarResults, setSimilar] = useState();

    const getSimilar = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=5`
        );
        const data = await api.json();
        setSimilar(data);
    }

    useEffect(() => {
        getSimilar();
      }, [params.name]);


  return (
    <div>
        <Wrapper>
            Similar Picks
            <p></p>
        </Wrapper>
    </div>
  )
}

  const Wrapper = styled.div`
    margin: 4rem;
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
    margin-left: 32rem;
    
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


export default Similar
*/
