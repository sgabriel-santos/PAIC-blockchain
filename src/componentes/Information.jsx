import React from 'react'
import '../styles/Information.css'
export default props => {
    return (
        <div className="py-5 text-center" id="readHome">
            <h2>{props.title}</h2>
            <p className="lead">{props.text}</p>
        </div>
    )
}