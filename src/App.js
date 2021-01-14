import React from 'react';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import ButtonAppBar from '../src/Pages/Home';


function App() {
  return (
  <>
    
    
    <BrowserRouter>
    <ButtonAppBar/>
          <Routes/>
          
    </BrowserRouter>
    
    
  </>

  );
}

export default App;