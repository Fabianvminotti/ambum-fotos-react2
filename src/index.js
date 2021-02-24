import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter,Link,Route, Switch} from "react-router-dom"

import Inicio from './Inicio';


ReactDOM.render(
  

    <BrowserRouter>
      <Switch>
          <Route exact path="/">
          <Inicio/>
          </Route>
          <Route path="/SantaFe">
          <h2>Santa Fe</h2>
          <Link to='/'>inicio</Link>
          </Route>
          <Route path="/Uruguay">
          <h2>Uruguay</h2>
          </Route>
          <Route path="/AboutMe">
          <h2>About Me</h2>
          </Route>
        </Switch>
    </BrowserRouter>
    
   
  
  ,
  document.getElementById('root')
);


