
import Search from './Components/Search';
import Pages from './Pages/Pages';
import HomeBtn from './Components/HomeBtn';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <HomeBtn></HomeBtn>
          <Search></Search>
          <Pages></Pages>
      </div>
    </BrowserRouter>
  );
}

export default App;
