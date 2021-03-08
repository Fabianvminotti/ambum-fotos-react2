import react from 'react'
import ReactDOM from 'react-dom';
import{BrowserRouter,Link,Route, Switch} from "react-router-dom"


function Navegador() {
    return(
        <nav >
		  <input type="checkbox" id="menu"/>
		  <label for="menu"> ☰ </label>
		  <ul className="nav-container">
		  <Link to='/'> <li className="nav-logo"> <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" /> </li></Link>
		   <Link to='/SantaFe'> <li className="nav-item">Santa Fe</li></Link>
           <Link to='/Uruguay'> <li className="nav-item">Uruguay</li></Link>
           <Link to='/AboutMe'> <li className="nav-item">Quien soy?</li></Link>
		  </ul>
	    </nav>
    )
    
}

export default Navegador