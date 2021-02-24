import react from 'react'
import ReactDOM from 'react-dom';
import{BrowserRouter,Link,Route, Switch} from "react-router-dom"


function Navegador() {
    return(
        <nav>
		  <input type="checkbox" id="menu"/>
		  <label for="menu"> ☰ </label>
		  <ul>
		   
		   <Link to='/SantaFe'> <li className="item">Santa Fe</li></Link>
           <Link to='/Uruguay'> <li className="item">Uruguay</li></Link>
           <Link to='/AboutMe'> <li className="item">Quien soy?</li></Link>
		  </ul>
	    </nav>
    )
    
}

export default Navegador