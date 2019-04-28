import {todo_Actions} from '../constants/Todo'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';

export const todoServer = {
handleTodo: handleTodo,
handleFindOneTodo : handleFindOneTodo
}

export function handleTodo(userId,item)
{
  
  var user ={'userId':userId,'items':item}

  const postRequest =  fetch(ROOT_URL+'/api/Accounts/TodoList', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.todo_status)
      if(data.todo_status =='failure'){
      store.dispatch({type:todo_Actions.todo_Create.FAILURE,payload:data});
      return ;
      }
    else if(data.todo_status =='created') {
      store.dispatch({type:todo_Actions.todo_Create.CREATE,payload:data});
      return ;
    }
    
     });
   })


return {type:todo_Actions.todo_Create.NEW,payload:'none'};

};

export function handleFindOneTodo(userId)
{
  const getRequest =  fetch(ROOT_URL+'/api/Accounts/getOneTodo/' + userId, {
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.todo_status)
      if(data.todo_status =='not_found'){
      store.dispatch({type:todo_Actions.todo_Create.FAILURE,payload:data});
      return ;
      }
    else{
      store.dispatch({type:todo_Actions.todo_Create.FIND,payload:data});
      return ;
    }
   
     });
})


return store.dispatch({type:todo_Actions.todo_Create.NEW,payload:"none"});

};