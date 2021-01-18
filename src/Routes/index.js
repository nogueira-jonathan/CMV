import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Produtos from '../Pages/Produtos'





const Routes = ()=>(
   
   <Switch>
        <Route path="/" component={Home} exact/> 
        <Route path="/produtos" component={Produtos}/>
        
    
    </Switch>
    
)

export default Routes;