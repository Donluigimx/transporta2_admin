import React, { Component } from 'react';

class AuthenticateContainer extends Component {
    render() {
        console.log('a');
        return (
            <div className="columns is-mobile">
                <div className="column is-half is-offset-one-quarter">
                    <div className="field">
                        <label className="label">Usuario</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Usuario"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Contraseña</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="*******"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthenticateContainer;