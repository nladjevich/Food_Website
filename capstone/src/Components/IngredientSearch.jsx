import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaList } from 'react-icons/fa';
import styled from 'styled-components';

function IngredientSearch() {
    const [input, setInput] = useState();
    const navigate = useNavigate();
    

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/ingredientsSearch/' + input)
    };

  return (
    <FormStyled onSubmit={submitHandler}>
        <div>
            <FaList></FaList>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
    </FormStyled>
    
  )
};

const FormStyled = styled.form`
    margin: 1rem 20rem;
    div{
        width: 50%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        outline: none;
        width: 100%;
        border-radius: 1rem;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
    `;


export default IngredientSearch
