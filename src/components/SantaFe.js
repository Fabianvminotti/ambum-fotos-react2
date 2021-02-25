import React from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import Navegador from './Navegador'
import Visor from './Visor'

class SantaFe extends React.Component{

    constructor(props){
		super(props);

        this.state ={visorOn:false}
        this.state ={visorImg:""}

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
            },
            {
                'titulo':'San Agustin',
                'foto':'https://i.ibb.co/Lg4ktzR/1613254676597-3.jpg'
            },
            {
                'titulo':'Museo Etnografico',
                'foto':'https://i.ibb.co/sJRbfR9/1606089314776-2.jpg'
            },
            {
                'titulo':'Faro',
                'foto':'https://i.ibb.co/BwX6RNk/IMG-20200906-180047.jpg'
            },
            {
                'titulo':'Puente colgante',
                'foto':'https://i.ibb.co/Bz9fRk6/IMG-20201007-184631-1.jpg'
            },
            {
                'titulo':'Teatro Municipal',
                'foto':'https://i.ibb.co/t38dT0D/IMG-20200910-124937.jpg'
            },
            {
                'titulo':'Avenida Aristobulo del Valle',
                'foto':'https://i.ibb.co/VT8W7QV/IMG-20200906-172414.jpg'
            },
            {
                'titulo':'Puente colgante',
                'foto':'https://i.ibb.co/1zzxd5c/1607470803154-2.jpg'
            }
        
        
        ]
        }
    }


    visor = (item) => {
        // e.preventDefault();
        this.setState({
            visorOn:true, 
            visorImg:item.foto //aca cambio el estado para que el valor visorImg obtenga la imagen correspondiente al elemento al que le hice click
        });
        
    }
    visorOff = () => {
        // e.preventDefault();
        this.setState({
            visorOn:false, 
        });
        
    }


   render(){  
        return(
        <div>
            {
                (this.state.visorOn)?
                <Visor imagen={this.state.visorImg} visorOff={this.visorOff}/> 
                
                :
                " " 
            }
                <div>
                    <Navegador/>
                </div>
                <div className="Cont_principal" >
                    {
                        this.state.datos.map((item,index) =>{
                                return(
                                    
                                        <div className="Cont_item" key={index} onClick={()=>this.visor(item) } > 
                                         {/* con "onClick={()=>this.visor(item) }"  llamo a la funcion visor con el parametro item(que este incluye titulo y foto)    */}
                                            <div className="Cont_img"> 
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