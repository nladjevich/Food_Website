import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Logout() {
    const submitHandler = (e) => {
        e.preventDefault();
    };

  return (
    <NavLink to={'/login'}>
        <div onChange={submitHandler}>
            <Button>
                Logout
            </Button>
        </div>
    </NavLink>
  )
}

const Button = styled.button`
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 1rem;
    border: none;
    outline: none;
    width: 10%;
    border-radius: 3rem;
    cursor: pointer;
}
`
export default Logout
