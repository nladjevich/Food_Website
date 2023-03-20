
import Search from './Components/Search';
import Pages from './Pages/Pages';
import HomeBtn from './Components/HomeBtn';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <List>
          
          <HomeBtn></HomeBtn>
          <Search></Search>
        </List>
        <Pages></Pages>
      </div>
    </BrowserRouter>
  );
}

const List = styled.div`
  display: inline;
`

export default App;
