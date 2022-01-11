import './App.css';
import LandingPages from './componentes/LandingPages';
import Home from './componentes/Home';

function App() {
  return (
    <BrowserRouters>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPages}/>
          <Route exact path='/home' componet={Home} />
        </Switch>
      </div>
    
    </BrowserRouters>
  );
}

export default App;
