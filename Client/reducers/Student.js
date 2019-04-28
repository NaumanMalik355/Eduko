import {student_Actions} from '../constants/Student'
import {student_Status} from '../constants/Student'
 const student_initialState = {
    student_Status: student_Status.student_Create.SHOWSTUDENT,
    studentList:[]
  };

  export default function (state = student_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case student_Actions.student_Create.SHOWSTUDENT:// start fetching posts and set loading = true
        console.log("I am from Reduce New..");
    // alert("neww"+action.payload.todos.length)
     
        return { ...state, student_Status: student_Status.student_Create.SHOWSTUDENT,studentList:action.payload.todos};
      // case student_Actions.student_Create.SHOWDATA:
      //    // console.log("I am from Reduce Failure..");
      //    // alert("in reducer"+action.payload.ttdos.length) 
      //    return {...state, student_Status: student_Status.student_Create.STUDENTNEW,studentList:action.payload.todos}
      case student_Actions.student_Create.ADDSTUDENT:// start fetching posts and set loading = true
         //console.log("I am from Reduce Show Data..");
         //alert("from show data");
         return { ...state, student_Status: student_Status.student_Create.ADDSTUDENT};
  
      default:
      console.log("default is firing")
        return {...state,student_Status: student_Status.student_Create.SHOWSTUDENT};

    }
  };
