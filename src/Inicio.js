import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter,Link,Route, Switch} from "react-router-dom"

import './albumDeFotos.css'
// import Menu from "./Menu.js"

class Inicio extends React.Component{

	

	

	render(){
		return(
			<div class="bloqueCentral">
				<h1>Fabián Minotti</h1>
				<Link to='/SantaFe'><div class="boton">Santa Fe</div></Link>
				<Link to='/Uruguay'><div class="boton">Uruguay</div></Link>
				<Link to='/AboutMe'><div class="boton">Quien soy</div></Link>
			</div>

			)
	}
}

export default Inicio