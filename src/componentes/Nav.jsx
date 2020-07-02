import React from 'react'
import {Link} from 'react-router-dom'
import {trocaClass, addActive, trocaActive} from '../functions/nav.jsx'

export default class Nav extends React.Component {
    componentDidMount(){
        addActive(this.props.isDoctor)
    }

    render(){
        return this.choiceNav()
    }
    
    choiceNav(){
        if(this.props.isDoctor) return this.navDoctor()
        return this.navPaciente()
    }

    navDoctor(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/pacientes" onClick={() => trocaActive("pacientes",true)}>Blockchain-test</Link>
                    <button className="navbar-toggler collapsed" onClick={() => trocaClass()} type="button" data-toggle="collapse" data-target="navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link pages" id="pacientes"  to="/pacientes" onClick={() => trocaActive("pacientes",true)}>Pacientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pages" id="perfil"  to="/perfil" onClick={() => trocaActive("perfil",true)}>Perfil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pages" id="newDoctor"  to="/newDoctor" onClick={() => trocaActive("newDoctor",true)}>Adicionar médico</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pages" id="ajuda"  to="/ajuda" onClick={() => trocaActive("ajuda",true)}>Ajuda</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    navPaciente(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/home" onClick={() => trocaActive("home")}>Blockchain-test</Link>
                    <button className="navbar-toggler collapsed" onClick={() => trocaClass()} type="button" data-toggle="collapse" data-target="navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link home pages" id="home"  to="/home" onClick={() => trocaActive("home")}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link home pages" id="data"  to="/data" onClick={() => trocaActive("data")}>Dados</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pages" id="perfil"  to="/perfil" onClick={() => trocaActive("perfil")}>Perfil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pages" id="ajuda"  to="/ajuda" onClick={() => trocaActive("ajuda")}>Ajuda</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}