import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Params, useParams } from 'react-router-dom'

function Info() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState({});
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  const fetchSimilar = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/similar?apiKey=${process.env.REACT_APP_API_KEY}`)
    const similarData = await data.json();
    setSimilar(similarData);
    console.log(similarData);
  };

  useEffect(() => {
    fetchDetails();
    fetchSimilar();
  }, [params.name]);


  return (
   <DetailWrapper>
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
    </div>
    <InfoDiv>
      <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
      <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
      {activeTab === 'instructions' && (
        <div>
          <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
          <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
        </div>
      )}

      {activeTab === 'ingredients' && (
        <ul>
          {details.extendedIngredients.map((ingredients) => (
            <li key={ingredients.id}>{ingredients.original}</li>
          ))}
        </ul>
      )}
    </InfoDiv>
    <div>
      {similar.title}
    </div>
   </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
    margin-left: 1rem;
  }
  li {
    font-size: 1.2 rem;
    line-height: 2.5rem;
    margin-left: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  p {
    margin: 2rem;
  }
  img {
    border-radius: 2rem;
    filter: drop-shadow(30px 10px 4px grey);
    margin: 1rem;
  }
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin: 1rem;
  font-weight: 600;
`
const InfoDiv = styled.div`
  margin-left: 10rem;
  border: 2px solid black;
`

export default Info
