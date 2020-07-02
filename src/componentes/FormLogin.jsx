import React from 'react'
import Information from './Information.jsx'
import '../styles/Login.css'

export default props =>{
    return(
        <div id='content' className='row'>
            <div className="col-md-8 order-md-1" id="formHome">
                <Information
                    title = {"Tela de Login"}
                    text = {`Olá, verificamos que o seu endereço não está cadastrado em nosso contrato. 
                    Por favor, informe o seu nome completo para que você seja encontrado mais facilmente pelo seu médito posteriormente!`}
                />
                <form onSubmit={props.handleSubmit}>
                    <div className="mb-3">
                        <label>Seu nome Completo</label>
                        <input name="name" value={props.name} onChange={props.handleInputChange} type="text" className="form-control" placeholder="Nome Completo"/>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" id="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    )
}