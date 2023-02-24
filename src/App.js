
import Homepage from './pages/HomePage';
import { CountryProvider } from './context/CountryState';

function App() {
  return (
      <div>
  
        <CountryProvider>
          <Homepage />
        </CountryProvider>
      </div>
  );
}

export default App;