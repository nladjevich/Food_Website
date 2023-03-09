import React from 'react'
import styled from 'styled-components';
import { FaRandom } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Random() {
    const submitHandler = (e) => {
        e.preventDefault();
    };

  return (
    <NavLink to={'/random/'}>
        <FormStyled onChange={submitHandler}>
            <div>
                <button><FaRandom></FaRandom></button>
            </div>
        </FormStyled>
    </NavLink>
  )
}

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
        border-radius: 3rem;
    }
    svg{
        display: block;
        margin: auto;
    }
`;

export default Random
