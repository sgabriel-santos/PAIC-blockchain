import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../pages/paciente/Home.jsx'
import Data from '../pages/Data.jsx'
import Perfil from '../pages/Perfil.jsx'
import Ajuda from '../pages/paciente/Ajuda.jsx'
import Login from '../pages/paciente/Login.jsx'
import Pacientes from '../pages/medico/Pacientes.jsx'
import Nav from './Nav'
import NewDoctor from '../pages/medico/NewDoctor.jsx'

export default class Routes extends React.Component {    
    constructor(props){
        super(props);
        this.state = {pressures: props.user.myData.pressures}   //**********************//
        this.SubmitPressure = this.submitPressure.bind(this);
    }

    submitPressure(pressure){
        var nextPressure = this.state.pressures
        nextPressure.sistole.push(pressure.sistole)
        nextPressure.diastole.push(pressure.diastole)
        nextPressure.date.push(pressure.date)
    }

    myHome(){
        return <Home {...this.props} user={this.props.user}
        submitPressure={(pressure) => this.submitPressure(pressure)} />
    }

    choiceData(){
        const url = document.URL.split('/')
        var id = url[url.length-1]
        return <Data {...this.props} 
            pressures={id==='data' ? this.state.pressures: this.props.user.patientId[id].pressures} />
    }

    render(){
        return(
            <div>
                <Router>
                    <Nav isDoctor={this.props.user.myData.isDoctor}/>
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' render={() => this.myHome()} />
                            <Route path='/home' render={() => this.myHome()} />
                            <Route path='/data' render={() => this.choiceData()} />
                            <Route path='/login' render={() => <Login {...this.props} user={this.props.user} />} />
                            <Route path="/pacientes" render={() => <Pacientes user={this.props.user}/>} />
                            <Route path='/perfil' render={() => <Perfil user={this.props.user}/>} />
                            <Route path='/newDoctor' render={() => <NewDoctor user={this.props.user}/>} />
                            <Route path='/ajuda' component={Ajuda} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
