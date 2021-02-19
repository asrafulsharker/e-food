import React from 'react';
import './App.css';
import {Switch , Route} from "react-router-dom";
import Home from './home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
<>
    
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
    </>
  );
}

export default App;
