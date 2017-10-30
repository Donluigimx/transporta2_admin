import React from 'react';

export default props => {
    return (
        <div>
            <form>
                <div className="field">
                    <label className="label">Ruta</label>
                    <input type="text" className="input"/>
                </div>
                <div className="field">
                    <label className="label">Origen</label>
                    <input type="text" className="input"/>
                </div>
                <div className="field">
                    <label className="label">Destino</label>
                    <input type="text" className="input"/>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-link">Crear</button>
                    </div>
                </div>
            </form>
        </div>
    )
}