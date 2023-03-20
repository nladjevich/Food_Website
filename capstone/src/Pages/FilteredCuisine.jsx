import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

function FilteredCuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])
  return (
    <Grid>
        {cuisine.map((item) => {
            return (
                
                    <Card key={item.id}>
                        <NavLink to={'/info/' + item.id}>
                            <img src={item.image} alt={item.title} />
                        </NavLink>
                        <h4>{item.title}</h4>
                        
                    </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: auto;
`;

const Card = styled.div`
    margin: 1rem;
    img {
        width: 100%;
        border-radius: 2rem;
        filter: drop-shadow(30px 10px 4px grey);
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default FilteredCuisine
