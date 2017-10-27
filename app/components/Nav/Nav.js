import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div className="block">
            <nav className="navbar">
                <div className="navbar-menu is-active">
                    <div className="navbar-end">
                    {props.isAuthed
                        ? <a className="navbar-item">
                            Cerrar Sesión
                        </a>
                        : <Link
                            className="navbar-item"
                            to='/auth'>
                            Iniciar Sesión
                        </Link>
                    }
                    </div>
                </div>
            </nav>
        </div>
    )
}