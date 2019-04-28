import React from 'react';

class TodoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list:""}
	//define state for keeping textbox value ...take help from container component
    this.state = {item:"", userId: this.props.userId};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     }
  handleChange(event) {
//set state of this component on textbox value change. with the help of setState
      this.setState({item: event.target.value});
 
}
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleTodo(this.state.userId , this.state.item);
  //send textbox value to container .... hint: call container function here
    
  
}

componentDidMount(){
    this.props.handleFindOneTodo();
     this.handleChange();
  }

  render() {
    var todoItems =[]
    if(this.props.user_todos.length > 0){
     todoItems= this.props.user_todos.map((todo) =>
    
  // Only do this if items have no stable IDs
  <li>
    {todo.items}
  </li>
);
}

   
    return (
        <form onSubmit={this.handleSubmit} >

          <input type="text" name="item" onChange={this.handleChange} value={this.state.item} />

          
          <input type="submit" value="Submit" />

          <ul>
            {todoItems}
          </ul>
          
          </form>

          );

  }
}
export default TodoAdd;