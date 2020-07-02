import React from 'react'
import Graph from '../componentes/Graph'
import List from '../componentes/List'

export default class Data extends React.Component{
    constructor(props){
        super(props)
        this.state = {pressures: props.pressures}; //***************//
    }
    render() {
        return (
            <div>
                <div>
                    <Graph data={this.state.pressures}/>
                    <List data={this.state.pressures}/>
                </div>
            </div>
        )
    }
}