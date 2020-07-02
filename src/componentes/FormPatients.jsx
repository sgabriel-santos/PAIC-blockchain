import React from 'react'

export default props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row">
                <div className='col-5 col-xs-12 col-sm-9 col-ms-10'>
                    <input name="id" value={props.name} onChange={props.handleInputChange} 
                    type="text" className="form-control" placeholder="id do novo paciente"/>
                </div>
                <div className=''>
                    <button className="btn btn-primary" id="button" type="submit">Adicionar</button>
                </div>
            </div>
        </form>
    )
}