import './App.css';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Login from './Login.js';
import Flag from './Flag';
import Home from './Home';
import RealFlag from './RealFlag';

function App() {
  return (
    <Router>
        <div className="App">
          
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} /> 
          <Route path="/flag" exact component={Flag} /> 
          <Route path="/realFlag" exact component={RealFlag} />
    </div>
    </Router>
  );
}

export default App;
