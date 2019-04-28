import {todo_Actions} from '../constants/Todo'
import {todo_Status} from '../constants/Todo'
 const todo_initialState = {
    todo_status: todo_Status.todo_Create.NEW,
    user_todos : ""

  };

  export default function (state = todo_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case todo_Actions.todo_Create.FIND:// start fetching posts and set loading = true
        console.log("I am from Reduce New..");
        return { ...state, todo_status: todo_Status.todo_Create.NEW , user_todos : action.payload.todos};      
      case todo_Actions.todo_Create.CREATE:
         console.log("I am from Reducer created..");
        return {...state, todo_status: todo_Status.todo_Create.CREATED}
      case todo_Actions.todo_Create.DELETE:
         console.log("I am from Reduce DELETE..");
        return {...state, todo_status: todo_Status.todo_Create.DELETED}        
default:
      console.log("default is firing")

        return {...state,todo_status: todo_Status.todo_Create.NEW};

    }
  };
