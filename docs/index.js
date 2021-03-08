import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter,Link,Route, Switch} from "react-router-dom"

import Inicio from './Inicio';
import Uruguay from './components/Uruguay';
import SantaFe from './components/SantaFe';
import AboutMe from './components/AboutMe';


ReactDOM.render(
  

    <BrowserRouter>
      <Switch>

          <Route exact path="/">
          <Inicio/>
          </Route>

          <Route path="/SantaFe">
          <SantaFe/>          
          </Route>

          <Route path="/Uruguay">
          <Uruguay/>  
          </Route>

          <Route path="/AboutMe">
          <AboutMe/>  
          </Route>

        </Switch>
    </BrowserRouter>
    
   
  
  ,
  document.getElementById('root')
);


