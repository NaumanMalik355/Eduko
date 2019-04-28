import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class GetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
    personList:this.props.persons
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleFindOneTodo();
    }

    render() {
        var todoItems =[]
    if(this.state.personList.length > 0){
     todoItems= this.state.personList.map((todo) =>
    
  // Only do this if items have no stable IDs
  <li>
      Name : {todo.name} Registeration Number : {todo.regno} Status : {todo.status}
  </li>
);
}

    return (
     <div>
          <ul>
            {todoItems}
          </ul> 
    </div>

          );
    }
}

export default GetData;
