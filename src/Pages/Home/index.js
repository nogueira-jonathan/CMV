import React from 'react';
import { Container, AppBar } from './styles';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';

export default function ButtonAppBar() {
  

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          
          <Link to="/produtos" id="btnapp" color="inherit">Produtos</Link>
          
        </Toolbar>
      </AppBar>
        

         
    </Container>
    
    
  );
}

 

    

