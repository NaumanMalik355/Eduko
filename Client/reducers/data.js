import {data_Actions} from '../constants/Data'
import {data_Status} from '../constants/Data'
 const data_initialState = {
    data_Status: data_Status.data_Create.NEW,
    personList:[]
  };

  export default function (state = data_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case data_Actions.data_Create.NEW:// start fetching posts and set loading = true
        console.log("I am from Reduce New..");
        return { ...state, data_Status: data_Status.data_Create.NEW};
      case data_Actions.data_Create.FINDPerson:// start fetching posts and set loading = true
        console.log("I am from Reduce Loading..");
        return { ...state, data_Status: data_Status.data_Create.SHOWLIST,personList:action.payload.todos};
      case data_Actions.data_Create.CREATED:
         console.log("I am from Reducer created..");
        return {...state, data_Status: data_Status.data_Create.SUCCESS}
      case data_Actions.data_Create.FAILURE:
         console.log("I am from Reduce Failure..");
        return {...state, data_Status: data_Status.data_Create.FAILURE}
        case data_Actions.data_Create.EXISTING:
           console.log("I am from Reduce Failure..");
          return {...state, data_Status: data_Status.data_Create.EXISTING}
default:
      console.log("default is firing")

        return {...state,data_Status: data_Status.data_Create.NEW};

    }
  };
