import React from 'react';
import Plus from 'react-icons/fa/plus'

export default ({routes, onSelectChange, onCreateLink}) => (
    <div className="field has-addons">
        <div className="control is-expanded">
            <div className="select is-fullwidth">
                <select name="route" onChange={e => onSelectChange(e.target.value)}>
                    <option value="">Selecciona una ruta</option>
                    {
                        routes.map(route => (
                            <option value={route.id}>{route.number}</option>
                        ))                        
                    }
                </select>
            </div>
        </div>
        <div className="control">
            <button className="button is-primary" onClick={() => onCreateLink()}><Plus/></button>
        </div>
    </div>
);