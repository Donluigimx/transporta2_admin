import React from 'react';
import {Field, reduxForm} from "redux-form";

export default reduxForm({
    form: 'createRouteForm'
})(props => {

    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Ruta</label>
                <Field name="route" component="input" type="text" className="input"/>
            </div>
            <div className="field">
                <label className="label">Origen</label>
                <Field name="origin" component="input" type="text" className="input"/>
            </div>
            <div className="field">
                <label className="label">Destino</label>
                <Field name="destination" component="input" type="text" className="input"/>
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
        </form>
    )
})