import React from 'react'
import { GiNoodles } from "react-icons/gi";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function HomeBtn() {
    const submitHandler = (e) => {
        e.preventDefault();
    };

  return (
    <NavLink to={'/'}>
        <StyledForm onChange={submitHandler}>
            <button>
                <GiNoodles></GiNoodles>
            </button>
        </StyledForm>
    </NavLink>
  )
}

const StyledForm = styled.form`
margin: 0rem 1rem;
position: absolute;
div{
    width: 50%;
}
button{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 1rem;
    outline: none;
    border-radius: 5rem;
}
svg{
    display: block;
    margin: auto;
}
`;

export default HomeBtn
