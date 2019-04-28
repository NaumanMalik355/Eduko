import {teacher_Actions} from '../constants/Eduko'
import {teacher_Status} from '../constants/Eduko'
 const teacher_initialState = {
    teacher_Status: teacher_Status.teacher_Create.TEACHERNEW,
    teacherList:[]
  };

  export default function (state = teacher_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      //show teacher
      case teacher_Actions.teacher_Create.TEACHERNEW:// start fetching posts and set loading = true
        //console.log("I am from Reduce New..");
        alert("action "+action.type);
        return { ...state, teacher_Status: teacher_Status.teacher_Create.TEACHERNEW};
      case teacher_Actions.teacher_Create.CALLCARD:
         // console.log("I am from Reduce Failure..");
         // alert("in reducer"+action.payload.ttdos.length)
         return {...state, teacher_Status: teacher_Status.teacher_Create.TEACHERNEW,teacherList:action.payload.ttodos}
      //add teacher
      case teacher_Actions.teacher_Create.ADDTEACHER:
        //console.log("I am from Reducer ADDTEACHER");
        //alert("i am from addteacher reducer");
        return {...state, teacher_Status: teacher_Status.teacher_Create.ADDTEACHER};
      case teacher_Actions.teacher_Create.DETAILS:
        alert("action "+action.type);
        return {...state, teacher_Status: teacher_Status.teacher_Create.DETAILS}
      default:
        console.log("default is firing")
        return {...state,teacher_Status: teacher_Status.teacher_Create.TEACHERNEW};

    }
  };
