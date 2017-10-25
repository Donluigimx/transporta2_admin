import React, {Component} from 'react';
import Authenticate from "components/Authenticate/Authenticate";
import {authUser} from "api/auth";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import * as userActionCreators from "redux/modules/users";

class AuthenticateContainer extends Component {

    handleAuth = async (username, password) => {
        const response = await authUser(username, password);
        this.props.authUser(response.id)
    };

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.isAuthed
                    ? <p>Hola {this.props.authedToken}</p>
                    : <Authenticate
                    onAuth={this.handleAuth} />}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        isAuthed: state.isAuthed,
        authedToken: state.authedToken
    }),
    (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer);