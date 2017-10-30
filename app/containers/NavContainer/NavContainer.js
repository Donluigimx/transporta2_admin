import React, {Component} from "react";
import Nav from "components/Nav/Nav";
import {connect} from "react-redux";
import Home from "components/Nav/Home";

class NavContainer extends Component {
    render() {
        console.log('This is Nav', this.props);
        return (
            <div>
                <Nav
                    isAuthed={this.props.isAuthed}
                />
                {this.props.isAuthed ? <Home/> : ''}
                <br/>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        isAuthed: state.isAuthed,
    })
)(NavContainer);