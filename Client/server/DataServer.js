import {data_Actions} from '../constants/Data'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';

export const dataServer = {
  handleEnterData: handleEnterData,
handleFindOneTodo: handleFindOneTodo
}
//create
export function handleEnterData(name,regno,status)
{
  var user ={'name':name,'regno':regno,'status':status}
  alert("reg is "+regno)
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/createdata', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.registerStatus )
    if(data.dataStatus=='failure'){
      store.dispatch({type:data_Actions.data_Create.FAILURE,payload:data});
      return ;
      }
    else if(data.dataStatus=='created') {
alert("list is in server with name"+data.todos.length)
      store.dispatch({type:data_Actions.data_Create.CREATED,payload:data});
      return ;
    }
    else if(data.dataStatus=='existing') {
      store.dispatch({type:data_Actions.data_Create.EXISTING,payload:data});
      return ;
    }
  });
  })

return {type:data_Actions.data_Create.NEW,payload:'none'};
};

// show data
export function handleFindOneTodo()
{
  const getRequest =  fetch(ROOT_URL+'/api/Accounts/getdata' , {
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
   }).then((response)=>{
    console.log('********'+response.status);

    response.json().then(data=>{
      console.log("data:......" + data.dataStatus)
     
      if(data.dataStatus =='not_found'){
      store.dispatch({type:data_Actions.data_Create.FAILURE,payload:data});
      return ;
      }
    else{
        alert("list length is "+ data.todos.length)
      store.dispatch({type:data_Actions.data_Create.FINDPerson,payload:data});
      return ;
    }
   
     });
})
return store.dispatch({type:data_Actions.data_Create.NEW,payload:"none"});

};
