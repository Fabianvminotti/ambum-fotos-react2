import React from 'react'
import Navegador from './Navegador'

class SantaFe extends React.Component{

    constructor(props){
		super(props);

		this.state = {
            datos:[{
                'titulo':'Costanera Este',
                'foto':'https://i.ibb.co/GFVwQcH/1611612576184.jpg'
            },
            {
                'titulo':'Parque de la Constitucion',
                'foto':'https://i.ibb.co/NYjVsBL/1611613048783.jpg'
            },
            {
                'titulo':'Palomar',
                'foto':'https://i.ibb.co/rp97grg/IMG-20201104-125721.jpg'
            },
            {
                'titulo':'Puente colgante',
                'foto':'https://i.ibb.co/K52Sf16/1611613048765.jpg'
            }
        
        
        ]
        }
    }

			


   render(){  
        return(
        <div>
                <div>
                    <Navegador/>
                </div>
                <div className="Cont_principal">
                    {
                        this.state.datos.map(item =>{
                                return(
                                        <div class="Cont_item">
                                            <div class="Cont_img"> 
                                                <img src={item.foto}/>
                                            </div>   
                                            <p>{item.titulo}</p>
                                        </div>                                
                                            )
                                        }							
                                        )
                    }
                </div>
        </div>
            
        )
   }
    

}

export default SantaFe