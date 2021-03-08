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
            },
            {
                'titulo':'Piriapolis de noche',
                'foto':'https://lh3.googleusercontent.com/EMNkZ_MV9TTd7C4KGsRNkRLWG23tt3QW6cmOd3hsrc1hj73GmsaKxg7YTad4TOWuydJfVH-CoPcOWVuFkngscd1yEprEAh-LCjPk2yf8E9ydyk3nP1pWvAtzz4Ovo-oR5tFgrEKEC4Rj-PD4LaHHqHOZHQ9IKEx1lQ6eQjgcySqKTb0k0dRS-9UkAyKUF_UI9Q4xxENf4Wx_eXdhlU2HMmmcYiS6SVcfG9bAqMpO-gaC58MJp4pia9dp8lWKLR3etg74Doa0H9OCb1mgbLQJLmjhc2vdXmaAQLq-qk8besEJlv4_9pkrZEVOonAHAiFFg_A8PuoPwNSVAR-_OPc6uTf_fgHaKs2eNGdv35R36_gOUywgbw426dBsYlwl61nBfECtlJkyrSoa37dUztMoebD8TYQzkC7SYZym3AXMyJcE-zLZaKR2FT1dIZhhUNQbQBjMOw7Yo1Y6wPvTHdXC4uUDKiVDQzNxi3CPUsksPi2tC74gGscc4ID5UlRkF-ZmDrjt4JVxcibtz5GiiLcJ4X8qKk_fNzfUYySk4I91f_aVAUJQtxBEo2bpRyNzPa12U85Mv7VezDBD74T9nOtgHn9mVcTpoEFI0MrM9LsaByeOrD3n1PVbkywX62eHQSQtUJoyT2ISWmq9PMWFIfMws9Jfpmg83PGSRcFtqivGaO1C4Fre-fq-NfS3rVCK=w1608-h903-no?authuser=0'
            },
            {
                'titulo':'Puerto de piriapolis',
                'foto':'https://lh3.googleusercontent.com/8AZX4KkwSGAw2EypYjesvGL3Wu-yTaObbw8bXm-Ac4ls8CeDVEzEzLCYh2iC8Otx4weobnxMaKWTJIrCxtPoOi9vJW8ruQT4fli53p7rIF-TqZbq9WJML546Q9XO5bb8mFnxD_ZfYDYFIrVBAnHIeaZPyGCs_gRguEtMFO8bNb6GpnwrXyI6cDvysFpYJtpnVYcb8cj3gqHl8AMGdXmXb2pV9vkn4C07x0BEHYDpQTZ27oiDFVcSX7mrz_E62sRAJJY71KoeO0524-5yyAufzgigSKnV9jfv0XFKLPJ31Na8BY2v_oBETX4PrZtPIygXmsngpH8u1ys2RFfJ2Q5_CrwIauqr2EVNT83BLuIHmHqpZ0S0qVNuqWN3EbB35dSxGJPPxrqLEieVVxarSho6MjHBRUd6RiiKMjnP2OxB-at-qRsGyUKxFDYiGybMzcb3taHiP-GEwLDpq4R3lMTIYAv14qmecBxgEb28A8TVT6scHhtPMJZIPoyY2zDAhoa0oqmE-q9MzGqjHEhgoHwszSO7-Qmiqm5pPNP2c-bn8CGPbm8UZjN6IjE_xg6bQhbGxHqfgVl6F1yqFQgsaBfVoT1I4oRpJh5kBtq0-8lZ-7-JGrQmE5HUacdjZ_1mxJ7LT0ceaF49GMr78gpG9Ggycb0Q6urdnbPki-JVUNEvbYbcaEKNIzMY2OFWtPQI=w1608-h903-no?authuser=0'
            },
            {
                'titulo':'Punta Negra',
                'foto':'https://lh3.googleusercontent.com/Fc6e-vZeLqAh5yjLMTbdiI6hYGbd_Wng83LGLAdpTjOORkHezD4BCVS2NohGWDmDZlLLN36NVLx0ar7de4bfPZ7r6hXn3Ks5-hX66sAnRBC77gOTAH2xxEl2AcaXKMDO-40Zrd0WNNRBX64u-njof29zxbtvMM51T-6fdtR1wZ_3wvWLAm9nZLTm0HdQWotdojRKOhoPTYYhCA_ITvW-XrjPES1500EDWmoAfRGYhmyXv5zEvIL4tUn3s_BoWnpUUnFr_oEIrTqZ3HL-RKYI-w4PkCxvHeky0g4dPDW5cnmfzurcd0AuJbnPbiXn1kX_2i0Ci5usWYUsm7QRrKWTvk5oLwMdYeJQUnvpvJYZkz-_ihp1Jy2-PsLxJp8gr6t3P_hWY9Blpb-coCegMuOSIa1H7GsONw4KuWwBmAxyPJGZezmC7vtPRw46YG8Vv9tSF2BDqQedrYdGz-4E5TkHHbq-0xQTiLvakNlIEyBBzJ2oZbjoa48EVuL29br9GFn29Lj_OY1otPbCVxNYcZvnzbKolQwwRFZUrbaChw2fb2KTBne3eCJSL4FhakxYtD8UjHd7sL6I79GKqn1ClQAKpZE0uQ_6SK_BW2k5Xh_JsR6mQ6ATpx0d1ZwNczDqXiGiGzuV3tUtsiXJXRnr4PztJy4Xp6HLdiDSdbGd21VEaWEo1ngdszYr-3Q7OF_3Fg=w1607-h903-no?authuser=0'
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