
import {teacher_Actions} from '../constants/Eduko'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';

export const edukoServer = {
  addTeacher: addTeacher,
  handleFindOneTodo:handleFindOneTodo
}
//create teacherData
export function addTeacher(teachername,coursename,coursecode,session,credithour,contacthour)
{
  //alert("before call"+teachername);
  var user={'teachername':teachername,'coursename':coursename,'coursecode':coursecode,'session':session,'credithour':credithour,'contacthour':contacthour}
  const postRequest =  fetch(ROOT_URL+'/api/Accounts/enter', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);
    response.json().then(data=>{
      console.log("data:......" + data.registerStatus )
    if(data.dataStatus=='failure'){
        store.dispatch({type:teacher_Actions.teacher_Create.FAILURE,payload:data});
        return ;
    }
    else if(data.todo_status=='found') {
        //alert("list is in server with name"+data.todos.length)
        //alert("from server");
        store.dispatch({type:teacher_Actions.teacher_Create.CALLCARD,payload:data});
        return ;
    }
    else if(data.dataStatus=='existing') {
        store.dispatch({type:teacher_Actions.teacher_Create.EXISTING,payload:data});
        return ;
    }
  });
  })

return {type:teacher_Actions.teacher_Create.TEACHERNEW,payload:'none'};
};


// show data
export function handleFindOneTodo()
{
  const getRequest =  fetch(ROOT_URL+'/api/Accounts/teacherData' , {
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
   }).then((response)=>{
    console.log('********'+response.status);

    response.json().then(data=>{
      console.log("data:......" + data.dataStatus)
     // not_found is from backend
      if(data.dataStatus =='not_found'){
      store.dispatch({type:teacher_Actions.teacher_Create.FAILURE,payload:data});
      return ;
      }
    else{
        //alert("list length is "+ data.ttodos.length)
      store.dispatch({type:teacher_Actions.teacher_Create.CALLCARD,payload:data});
      return ;
    }
     });
})
return store.dispatch({type:teacher_Actions.teacher_Create.TEACHERNEW,payload:"none"});
};

