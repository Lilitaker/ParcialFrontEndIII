import React from "react";

class Recordatorio extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        const {prevOptions} = this.props;

        return(
            <div className="recordatorio">
                <h3>Selección anterior: {prevOptions}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.arrayOpt.map((elemento, index) => {
                    return <li key={index}>{elemento}</li>
                })}</ul>
            </div>
        )
    }
}

export default Recordatorio;