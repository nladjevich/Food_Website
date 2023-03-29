import React from 'react'
import { NavLink } from 'react-router-dom'
import IngredientSearch from './IngredientSearch';
import styled from 'styled-components';


function IngredientsBtn() {
    const submitHandler = (e) => {
        e.preventDefault();
    };

   return (
    <NavLink to={'/ingredientsSearch/'}>
        <FormStyled onChange={submitHandler}> 
            <div>
                <button>Search by Ingredients</button>
            </div>
        </FormStyled>
    </NavLink>
  )
};

const FormStyled = styled.form`
    margin: 2rem;
    div{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }
    button{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 1rem;
        border: none;
        outline: none;
        width: 50%;
        border-radius: 1rem;
        cursor: pointer;
    }
    svg{
        display: block;
        margin: auto;
    }
    `;

export default IngredientsBtn
