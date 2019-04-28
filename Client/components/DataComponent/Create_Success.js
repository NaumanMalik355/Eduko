import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CreatedSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.props.handleFindOneTodo();
    }
    handleClick(event) {
        //this.props.history.push('/register')
        this.props.handleback();
    }
    render() {
        return (
          <div>
            <h1>You have been registered successfully</h1>
            <button onClick={this.handleClick}>Login</button>
            </div>
        );
    }
}

export default withRouter(CreatedSuccess);