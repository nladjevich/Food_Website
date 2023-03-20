import React from 'react'
import { GiNoodles, GiChecklist } from "react-icons/gi";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function HomeBtn() {
    const submitHandler = (e) => {
        e.preventDefault();
    };

  return (
    <List>
        <NavLink to={'/'}>
            <StyledForm onChange={submitHandler}>
                <button>
                    <GiNoodles></GiNoodles>
                </button>
            </StyledForm>
        </NavLink>
        <NavLink to={'/cuisines/'}>
            <StyledForm onChange={submitHandler}>
                <button>
                    <GiChecklist/>
                </button>
            </StyledForm>
        </NavLink>
    </List>
    
  )
}

const StyledForm = styled.form`
margin: 0rem 1rem;
position: relative;
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
    cursor: pointer;
}
svg{
    display: block;
    margin: auto;
}
`;

const List = styled.div`
    display: flex;
    margin: 1rem 0rem;

`

export default HomeBtn
