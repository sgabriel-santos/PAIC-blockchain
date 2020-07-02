import React from 'react'
import Information from './Information.jsx'
import '../styles/Login.css'

export default props =>{
    return(
        <div id='content' className='row'>
            <div className="col-md-8 order-md-1" id="formHome">
                <Information
                title='Adicione um novo médico ao sistema!'
                text='Por você já ser um médico, então você também pode adicionar novos médicos ao nosso sistema.
                Basta adicionar o id do usuário e enviar a solicitação'/>
                <form onSubmit={props.handleSubmit}>
                    <div className="mb-3">
                        <label>Informe o ID do usuário</label>
                        <input name="id" value={props.name} onChange={props.handleInputChange} type="text" className="form-control" placeholder="exemplo 73690-12"/>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" id="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    )
}