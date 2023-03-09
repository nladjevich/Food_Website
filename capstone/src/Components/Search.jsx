import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    };

  return (
    <FormStyled  onSubmit={submitHandler}>
        <form>
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            </div>
        </form>
    </FormStyled>
    
  )
};

const FormStyled = styled.form`
    margin: 1rem 20rem;
    div{
        width: 100%;
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

export default Search
