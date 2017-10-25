import React from 'react';

export default (props) => {
    let username = '';
    let password = '';

    return (
        <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
                <div className="field">
                    <label className="label">Usuario</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Usuario" onChange={e => username = e.target.value}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Contraseña</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="*******" onChange={e => password = e.target.value}/>
                    </div>
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-success" onClick={() => props.onAuth(username, password) }>
                            Iniciar Sesión
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}