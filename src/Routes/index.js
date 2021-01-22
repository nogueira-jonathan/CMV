import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Produtos from '../Pages/Produtos'
import CMV from '../Pages/CMV'






const Routes = ()=>(
   
   <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/produtos" component={Produtos}/>
        <Route path="/CMV" component={CMV}/>
        
    
    </Switch>
    
)

export default Routes;