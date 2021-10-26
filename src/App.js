import React, { Fragment } from 'react';
import './App.css';
import Proyects from './Views/Proyects';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    
<Fragment>
<Router basename={process.env.PUBLIC_URL}>
<div className="container">
<Switch>
  <Route path="/" exact>
     <Proyects></Proyects>
  </Route>
</Switch> 
</div>
</Router>
</Fragment>
  );
}

export default App;



