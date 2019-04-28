import {student_Actions} from '../constants/Student'
import store from '../store/index'
import {ROOT_URL} from '../constants/config';

export const studentServer = {
  addStudent:addStudent,
  showFindOneTodo:showFindOneTodo
}
//add student
export function addStudent(coursecose,email,fullname,regno,section)
{
  var user ={'studentcoursecode':coursecose,'email':email,'fullname':fullname,'regNo':regno,'section':section}

  const postRequest =  fetch(ROOT_URL+'/api/Accounts/enterStudent', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
        mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    console.log('********'+response.status);

    response.json().then(data=>{
      console.log("data:......" + data.dataStatus)
     // "not_found" is from backend
      if(data.dataStatus =='not_found'){
      store.dispatch({type:student_Actions.student_Create.FAILURE,payload:data});
      return ;
      }
      // "found" is from student controller in backend
    else{ 
        //alert("Dataaaa"+data.todos.length)
      store.dispatch({type:student_Actions.student_Create.SHOWSTUDENT,payload:data});
      return ;
    }
     });
})
   //yahan wh defaul state set krni hai jis par click krny sy yeh page show ho rha hai from showfindonetodo
return {type:student_Actions.student_Create.ADDSTUDENT,payload:'none'};

};

// show data  findcoursecode/:scoursecode
export function showFindOneTodo(scoursecode)
{
   // alert(scoursecode+"in server");
  const getRequest =  fetch(ROOT_URL+'/api/Accounts/findcoursecode/'+ scoursecode , {
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
   }).then((response)=>{
    console.log('********'+response.status);

    response.json().then(data=>{
      console.log("data:......" + data.dataStatus)
     // "not_found" is from backend
      if(data.dataStatus =='not_found'){
      store.dispatch({type:student_Actions.student_Create.FAILURE,payload:data});
      return ;
      }
      // "found" is from student controller in backend
    else{ 
      //  alert("Dataaaa"+data.todos.length)
      store.dispatch({type:student_Actions.student_Create.SHOWSTUDENT,payload:data});
      return ;
    }
     });
})
return store.dispatch({type:student_Actions.student_Create.STUDENTNEW,payload:"none"});
};