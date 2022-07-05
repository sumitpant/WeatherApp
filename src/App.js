
import './App.css';
import Main from './Components/Main';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
//http://api.weatherapi.com/v1/search.json?key=28bba4d1b56f4e36b0270752220507&q=29.2183, 79.5130
function App() {
/**
 * Create Carousel component.
 * Make it responsive;
 */

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route/>
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
