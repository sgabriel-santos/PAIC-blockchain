import React from 'react'
import '../styles/perfil.css'
export default props => {
    return(
        <div>
            <p><span className='title'>Nome:</span> {props.user.myData.name}</p>
            <p><span className='title'>ID:</span> {props.user.myData.id}</p>  
        </div>
    )
}