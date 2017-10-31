import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Authenticate from "components/Authenticate/Authenticate";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActionCreators from "redux/modules/users";
import {Redirect} from 'react-router-dom';

class AuthenticateContainer extends Component {

    static propTypes = {
        isAuthed: PropTypes.bool.isRequired,
        authedToken: PropTypes.string.isRequired,
        fetchAndHandleAuthedUser: PropTypes.func.isRequired
    };

    handleAuth = async (username, password) => {
        this.props.fetchAndHandleAuthedUser(username, password)
    };

    render() {
        return (
            <div>
                {this.props.isAuthed
                    ? <Redirect to={{pathname: '/home'}}/>
                    : <Authenticate
                    onAuth={this.handleAuth} />}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        isAuthed: state.users.isAuthed,
        authedToken: state.users.authedToken,
        userId: state.users.userId,
    }),
    (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer);