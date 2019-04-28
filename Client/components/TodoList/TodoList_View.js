import React, { Component } from "react";
import { connect } from "react-redux";
import TodoAdd from './TodoList_Add';
import { todoServer } from '../../server/TodoListServer';


const mapStateToProps = (state) => {
  console.log("****************************state:", state);
    return{
        todo_status : state.todo_Reducer.todo_status,
        user_todos : state.todo_Reducer.user_todos
    };
};


const mapDispatchToProps = (dispatch) => {

  return {

    handleTodo: (userId,item) => { dispatch(todoServer.handleTodo(userId,item)) },
    handleFindOneTodo : (userId) => {dispatch(todoServer.handleFindOneTodo(userId))}  
      };
};



class TodoView extends Component {
  constructor(props) {
      super(props);
     this.handleTodo  = this.handleTodo.bind(this)
     this.handleFindOneTodo = this.handleFindOneTodo.bind(this)
  }

  handleTodo(u,i){

  this.props.handleTodo(u,i);
}

handleFindOneTodo(u = this.props.match.params.userId){
  this.props.handleFindOneTodo(u);
}
 

  render() {
    return (
    <TodoAdd userId = {this.props.match.params.userId} handleTodo={this.handleTodo} handleFindOneTodo = {this.handleFindOneTodo} user_todos = {this.props.user_todos}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoView);