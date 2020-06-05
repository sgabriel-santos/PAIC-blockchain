import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import Form from './Form'
import List from './List'
// import Graph from '../componentes/Graph'

const test = (props) => {
    return <List list={props}/>
}

export default class Routes extends Component {    
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router>
                <Route path='/home' component={Form} />
                <Route path='/list' render={(props) => <List {...props} list={props.list} />} />
                 {/* <Redirect from='*' to='/home' /> */}
            </Router>
        )
    }
}