import React from "react";
import Opcion from "../Opcion/Opcion";
import Recordatorio from "../Recordatorio/Recordatorio";
import data from "../../json/data.json";

class Historia extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 1,   //esto representa a la key de los elementos
            idNumber: "1",
            arrayOptions: []
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        const {counter, idNumber, arrayOptions} = this.state; //destructuración
        if(prevState.counter !== counter && counter <= 5){
            arrayOptions.push(idNumber.substring(1).toUpperCase());
        }
    }

    handlerOptA = () => {
        const {counter} = this.state; //Destructurar
        if(counter < 5){
            this.setState(
                {
                    counter: counter + 1,  
                    idNumber: counter + 1 + "a",
                }
            )
        }
    }

    handlerOptB = () => {
        const {counter} = this.state;
        if(counter < 5){
            this.setState(
                {
                   counter: counter + 1,  
                    idNumber: counter + 1 + "b",
                }
            )
        }
    }
    
    render(){

        const {idNumber, arrayOptions} = this.state;
        const dataFilter = data.find((objeto) => objeto.id.includes(idNumber));
    
        let handlers = {
            optA: this.handlerOptA,
            optB: this.handlerOptB
        }

        return(
            <div className="layout">
                <h1 className="historia">{dataFilter.historia}</h1>
                <Opcion handlers={handlers} options={dataFilter.opciones}/>
                <Recordatorio prevOptions={idNumber.substring(1).toUpperCase()} arrayOpt={arrayOptions}/>
            </div>
        )
    }
}

export default Historia;