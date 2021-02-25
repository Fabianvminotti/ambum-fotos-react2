import React from 'react'
import Navegador from './Navegador'
import Visor from './Visor'

class Uruguay extends React.Component{

    constructor(props){
		super(props);

		this.state = {
            datos:[{
                'titulo':'Playa Mansa de noche y con lluvia',
                'foto':'https://i.ibb.co/rpDX60q/IMG-20200708-183222.jpg'
            },
            {
                'titulo':'Faro de Jose Ignacio',
                'foto':'https://i.ibb.co/nzWGFpS/IMG-20200613-104650.jpg'
            },
            {
                'titulo':'Caminito de la peninsula de Punta del Este',
                'foto':'https://i.ibb.co/QbfF6r7/image-1.jpg'
            },
            {
                'titulo':'Vista desde mi departamento',
                'foto':'https://i.ibb.co/mzQhKnd/IMG-20200324-065831.jpg'
            },
            {
                'titulo':'Punta Ballena',
                'foto':'https://i.ibb.co/GW5Z47q/IMG-20200719-164626-1.jpg'
            },
            {
                'titulo':'Dedos de Punta del Este',
                'foto':'https://i.ibb.co/N1k8rFK/IMG-20200604-173047.jpg'
            },
            {
                'titulo':'puerto de punta del Este',
                'foto':'https://i.ibb.co/WB9gbpC/IMG-20200620-172427.jpg'
            },
            {
                'titulo':'Muelle Parada 3 de la mansa',
                'foto':'https://i.ibb.co/255bJKw/IMG-20200722-174655.jpg'
            },
            {
                'titulo':'Piriapolis',
                'foto':'https://i.ibb.co/n7pDb26/image.jpg'
            },
            {
                'titulo':'Puerto de Punta',
                'foto':'https://i.ibb.co/qgpXnj0/IMG-20200726-180956.jpg'
            },
            {
                'titulo':'Hotel Enjoy',
                'foto':'https://i.ibb.co/pXsGYZf/IMG-20200812-194319.jpg'
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

export default Uruguay