import React from "react";

class Opcion extends React.Component{

    constructor(props){
        super(props)
        this.state = {}    
    }

    render(){

        const {handlers, options} = this.props;

        return(
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={handlers.optA}>A</button>
                    <p>{options.a}</p>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={handlers.optB}>B</button>
                    <p>{options.b}</p>
                </div>
            </div>
        )
    }
}

export default Opcion;