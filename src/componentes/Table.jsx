import React from 'react'
import {Link} from 'react-router-dom'

export default props => {
    const renderRows = () => {
        const list  = props.pacientes || []
        return list.map((dado,key) => (
            <tr key={key}>
                <td>{dado.id.toString()}</td>
                <td>{dado.name.toString()}</td>
                <td>
                    <Link className="nav-link pages" id="paciente"  to={`/data/${dado.id}`}>Ver Paciente</Link>
                </td>
            </tr>
        ))
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nome</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}