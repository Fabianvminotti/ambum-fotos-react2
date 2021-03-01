import React from 'react';
import{Link} from "react-router-dom"

import './albumDeFotos.css'
// import Menu from "./Menu.js"

class Inicio extends React.Component{

	

	

	render(){
		return(
			<div className="inicio-fondo-inv">
				<div className="inicio-fondo1">					
				</div>
				<div className="inicio-fondo2">					
				</div>

				<div className="botonera">
					<h1>Fabián Minotti</h1>
					<Link to='/SantaFe'><div className="boton">Santa Fe</div></Link>
					<Link to='/Uruguay'><div className="boton">Uruguay</div></Link>
					<Link to='/AboutMe'><div className="boton">Quien soy</div></Link>
				</div>
			</div>

			)
	}
}

export default Inicio