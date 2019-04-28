import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ShowData extends Component {
    constructor(props) {
        super(props);
        this.state = {
    name:"",reg:"",status:""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event) {
this.setState({[event.target.id]:event.target.value})
    }
    handleClick() {
        this.props.handleFindOneTodo(this.state.name,this.state.reg,this.state.status);
    }

    render() {
        return (
          <div>
              <input type="text" onChange={this.handleChange} id="name" placeholder="Enter name" value={this.state.name}></input>
              <input type="text" onChange={this.handleChange} id="reg" placeholder="Enter Reg" value={this.state.reg}></input>
              <input type="text" onChange={this.handleChange} id="status" placeholder="Enter status" value={this.state.status}></input>
              <input type="submit" onClick={this.handleClick} />
        </div>
        );
    }
}



export default withRouter(ShowData);
