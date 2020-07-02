import React from 'react'
import Info from './Information.jsx'
import '../styles/Form.css'

export default props =>{
    return (
        <div id='content' className='row'>
            <div className="col-md-8 order-md-1" id="formHome">
                <Info
                title={"Registre a sua pressão arterial"}
                text={`Olá, precisamos que você registre diáriamente sua pressão arterial, 
                para que possa ser vista pelo seu médico regularmente. Não se preocupe, seus dados estão seguros!`}/>
                <h4>Your pressures</h4>
                <form onSubmit={props.handleSubmit}>
                    <div className="mb-3">
                        <label>Sistole</label>
                        <input name="sistole" type="text" className="form-control"  value={props.sistole} onChange={props.handleInputChange} placeholder="valor referente a sistole"/>
                    </div>
                    <div className="mb-3">
                        <label>Diastole</label>
                        <input name="diastole" type="text" className="form-control" value={props.diastole} onChange={props.handleInputChange} placeholder="valor referente a diastole"/>
                    </div>
                    <div className="mb-3">
                        <label>Data</label>
                        <input name="date" type="date"  className="form-control" value={props.date} onChange={props.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label>Hora</label>
                        <input name="time" type="time"  className="form-control" value={props.time} onChange={props.handleInputChange}/>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" id="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
        
    );
}