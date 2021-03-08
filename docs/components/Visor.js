import React from 'react'


class Visor extends React.Component{

    constructor(props){
		super(props);
    }

render(){

    return(
        <div className="visor-cont">
            <div className="visor-fondo">

            </div>
            <img src={this.props.imagen}/>
            <p onClick={this.props.visorOff}>x</p>
               

        </div>
    )

}
    
}


export default Visor