import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import {Header, Footer} from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Home}/>
      </Switch>  
      <Footer/>
    </div>
  );
}

export default App;
