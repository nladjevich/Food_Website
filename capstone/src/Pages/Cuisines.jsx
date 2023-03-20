import React from 'react'
import styled from 'styled-components';
import { GiAfrica, GiEuropeanFlag, GiIsland, GiAsianLantern, GiIndiaGate, GiJapan, GiSouthKorea, GiSouthAmerica, GiMexico, GiSpain, GiEarthAsiaOceania } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { FaFlagUsa, FaPepperHot, FaGlobeEurope } from 'react-icons/fa';

function Cuisines() {
    
    const submitHandler = (e) => {
        e.preventDefault();
    };

  return (
    <Grid className='grid-container'>
        <List>
            <StyledForm onChange={submitHandler}>
                <NavLink to={'/cuisines/filter/African'}>
                    <button><GiAfrica></GiAfrica></button>
                    <p>African</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/American'}>
                    <button><FaFlagUsa></FaFlagUsa></button>
                    <p>American</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/British'}>
                    <button><GiEuropeanFlag></GiEuropeanFlag></button>
                    <p>British</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Cajun'}>
                    <button><FaPepperHot></FaPepperHot></button>
                    <p>Cajun</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Caribbean'}>
                    <button><GiIsland></GiIsland></button>
                    <p>Caribbean</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Chinese'}>
                    <button><GiAsianLantern></GiAsianLantern></button>
                    <p>Chinese</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Eastern European'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>Eastern European</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/European'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>European</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/French'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>French</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/German'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>German</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/African'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>Greek</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Indian'}>
                    <button><GiIndiaGate></GiIndiaGate></button>
                    <p>Indian</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Irish'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>Irish</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Italian'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>Italian</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Japanese'}>
                    <button><GiJapan></GiJapan></button>
                    <p>Japanese</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Jewish'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>Jewish</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Korean'}>
                    <button><GiSouthKorea></GiSouthKorea></button>
                    <p>Korean</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/American'}>
                    <button><GiSouthAmerica></GiSouthAmerica></button>
                    <p>Latin American</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Mediterranean'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>Mediterranean</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Mexican'}>
                    <button><GiMexico></GiMexico></button>
                    <p>Mexican</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Middle Eastern'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>Middle Eastern</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Nordic'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>Nordic</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Southern'}>
                    <button><FaGlobeEurope></FaGlobeEurope></button>
                    <p>Southern</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Spanish'}>
                    <button><GiSpain></GiSpain></button>
                    <p>Spanish</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Thai'}>
                    <button><GiEarthAsiaOceania></GiEarthAsiaOceania></button>
                    <p>Thai</p>
                </NavLink>
                <NavLink to={'/cuisines/filter/Vietnamese'}>
                    <button><GiEarthAsiaOceania></GiEarthAsiaOceania></button>
                    <p>Vietnamese</p>
                </NavLink>
            </StyledForm>
        </List>
    </Grid>
  )
}

const StyledForm = styled.form`
margin: auto;
position: relative;
div{
    width: 100%;
}
button{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 8rem;
    color: white;
    padding: 1rem 1rem;
    outline: none;
    border-radius: 5rem;
    cursor: pointer;
}
svg{
    display: block;
    margin: auto;
    color: white;
}
p {
    text-align: center;
}
NavLink {
    margin: 1rem;
}
`;

const List = styled.div`
    display: flex;
    margin: 1rem 0rem;

`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: auto;
`;

export default Cuisines
