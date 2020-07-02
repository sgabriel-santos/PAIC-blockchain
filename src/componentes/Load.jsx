import React from 'react'
import Info from './Information'
import '../styles/Load.css'

export default props => {
    return (
        <div className="container" id="loading">
            <Info
            title={props.title}
            text={props.text}/>
            <div className="cssload-loading bg-light">
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
    )
}