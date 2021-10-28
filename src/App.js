import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Proyects from './Views/Proyects';
import Proyect1 from './Views/Proyect1';
import Proyect2 from './Views/Proyect2';
import Proyect3 from './Views/Proyect3';
import Proyect4 from './Views/Proyect4';

import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get('https://fieldops-api.toroto.mx/api/projects')
     .then(response => {
        setData(response.data.data);
      })
       .catch(e => {
        console.log(e);
         })
}, []);

  return (
    
<Fragment>
<Router basename={process.env.PUBLIC_URL}>
<div className="container">
<Switch>
  <Route path="/" exact>
     <Proyects
      data = {data}
     />
  </Route>
  <Route path="/proyect1" exact>
    <Proyect1
      data = {data}
    />
  </Route>
  <Route path="/proyect2" exact>
    <Proyect2
     data = {data}
    />
  </Route>
  <Route path="/proyect3" exact>
    <Proyect3
     data = {data}
    />
  </Route>
  <Route path="/proyect4" exact>
    <Proyect4
     data = {data}
    />
  </Route>
</Switch> 
</div>
</Router>
</Fragment>
  );
}

export default App;



