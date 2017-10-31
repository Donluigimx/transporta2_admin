import React from 'react';

export default props => {
    let route = '';
    let origin = '';
    let destination = '';

    return (
        <div>
            <div className="field">
                <label className="label">Ruta</label>
                <input name="route" value={props.route} type="text" className="input" onChange={props.handleInputChange}/>
            </div>
            <div className="field">
                <label className="label">Origen</label>
                <input name="origin" value={props.origin} type="text" className="input" onChange={props.handleInputChange}/>
            </div>
            <div className="field">
                <label className="label">Destino</label>
                <input name="destination" value={props.destination} type="text" className="input" onChange={props.handleInputChange}/>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={props.createRoute}>
                        Crear
                    </button>
                </div>
            </div>
            <div className={`modal ${props.creatingRoute ? 'is-active' : ''}`}>
                <div className="modal-background"/>
                <div className="modal-content is-centered">
                    <img src="https://m.popkey.co/163fce/Llgbv_s-200x150.gif" alt="" className="is-centered"/>
                </div>
            </div>
        </div>
    )
}