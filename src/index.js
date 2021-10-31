import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mapbox-gl/dist/mapbox-gl.css';


ReactDOM.render(
<BrowserRouter>
    <App/>
</BrowserRouter>, 
document.getElementById('root'));


reportWebVitals();
