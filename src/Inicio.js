import React from 'react'
import ReactDOM from 'react-dom';

import './albumDeFotos.css'

class Inicio extends React.Component{

	

	

	render(){
		return(
			<div class="bloqueCentral">
				<h1>Fabián Minotti</h1>
				<a href="archivos/Album_SantaFe2.html"><div class="boton">Santa Fe</div></a>
				<div class="boton">Uruguay</div>
				<div class="boton">Quien soy</div>
			</div>

			)
	}
}

export default Inicio