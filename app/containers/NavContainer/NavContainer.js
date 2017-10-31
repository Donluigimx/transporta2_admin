import React, {Component} from "react";
import Nav from "components/Nav/Nav";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActionCreators from "redux/modules/users";
import Home from "components/Nav/Home";

class NavContainer extends Component {
    unAuth = () => {
        this.props.HandleUnAuthUser();
    };

    render() {
        return (
            <div>
                <Nav
                    isAuthed={this.props.isAuthed}
                    unauth={() => this.unAuth()}/>
                {this.props.isAuthed ? <Home/> : ''}
                <br/>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        isAuthed: state.users.isAuthed,
    }),
    (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(NavContainer);