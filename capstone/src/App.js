
import Search from './Components/Search';
import Pages from './Pages/Pages';
import HomeBtn from './Components/HomeBtn';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';



function App() {
  return (
    
      <BrowserRouter>
        <AuthProvider>
            <div className="App">
              <List>
                <HomeBtn></HomeBtn>
                <Search></Search>
              </List>
              <Pages></Pages>
            </div>
        </AuthProvider>
      </BrowserRouter>
    
  );
}

const List = styled.div`
  display: inline;
`

export default App;
