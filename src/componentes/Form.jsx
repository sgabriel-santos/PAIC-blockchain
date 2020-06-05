import React from 'react'

export default props =>{
    // const date = new Date
    // console.log(date.toISOString().slice(0,10))
    // console.log(date.toLocaleTimeString().slice(0,5))
    return (
        <div id='content' className='row'>
            <div className="col-md-8 order-md-1">
                <h4>Your pressures</h4>
                <form onSubmit={props.handleSubmit}>
                    <div className="mb-3">
                        <label>Sistole</label>
                        <input name="sistole" type="text" className="form-control"  value={props.sistole} onChange={props.handleInputChange} id="sistole" placeholder="valor referente a sistole"/>
                    </div>
                    <div className="mb-3">
                        <label>Diastole</label>
                        <input name="diastole" type="text" className="form-control" value={props.diastole} onChange={props.handleInputChange} id="diastole" placeholder="valor referente a diastole"/>
                    </div>
                    <div className="mb-3">
                        <label>Data</label>
                        <input name="date" type="date"  className="form-control" value={props.date} onChange={props.handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <label>Hora</label>
                        <input name="time" type="time"  className="form-control" value={props.time} onChange={props.handleInputChange}/>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
        
    );
}