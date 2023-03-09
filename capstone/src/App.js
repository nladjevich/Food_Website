
import Search from './Components/Search';
import Pages from './Pages/Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Search></Search>
          <Pages></Pages>
      </div>
    </BrowserRouter>
  );
}

export default App;
