
import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleBar from './Dashboard'
import SimpleAppBar from './DashboardTeacher'
import AddTeacher from './AddTeacher'
import { edukoServer } from '../../server/EdukoServer';
import { teacher_Status } from '../../constants/Eduko';
import { teacher_Actions } from '../../constants/Eduko'
import { studentServer } from '../../server/StudentServer'
//this is for state yeh reducer sy states ko allow krta ha
const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    teacher_Status: state.eduko_Reducer.teacher_Status,
    student_Status: state.student_Reducer.student_Status,
    teacherList: state.eduko_Reducer.teacherList,
    studentList:state.student_Reducer.studentList,
    userId : state.eduko_Reducer.userId,
  };
};
//this is for actions
const mapDispatchToProps = (dispatch) => {
  return {
    //handleSignIn: (username,password) => { dispatch(loginServer.handleSignIn(username,password)) },
    addTeacher: (teachername,coursename,coursecode,session,credithour,contacthour) => { dispatch(edukoServer.addTeacher(teachername,coursename,coursecode,session,credithour,contacthour)) },
    showFindOneTodo:(scoursecode)=> {dispatch(studentServer.showFindOneTodo(scoursecode)) },
    handleFindOneTodo:()=> { dispatch(edukoServer.handleFindOneTodo()) },
    handleShowClick : () =>{ dispatch({ type: teacher_Actions.teacher_Create.CALLCARD }) },
    handleClick : () =>{ dispatch({ type: teacher_Actions.teacher_Create.ADDTEACHER }) },
    showdetails : () => {dispatch({type: teacher_Actions.teacher_Create.DETAILS})}
  };
};

class TeacherView extends Component {
constructor(props){
  super(props);
  
}
componentDidMount(){
  this.props.handleFindOneTodo();
}

  getScreen(status) {
   alert("Status"+status)
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
      case teacher_Status.teacher_Create.TEACHERNEW:
      //alert("teacher list "+this.props.teacherList.length)
        return (
          <SimpleAppBar showFindOneTodo={this.props.showFindOneTodo} handleShowClick={this.props.handleShowClick} showdetails={this.props.showdetails}
          handleClick={this.props.handleClick} teacherList={this.props.teacherList}/>
        );
        break;
      
      case teacher_Status.teacher_Create.ADDTEACHER:
       // alert("in add teacher view")
        return (
         <AddTeacher addTeacher={this.props.addTeacher}/>
        );
        break;
      case teacher_Status.teacher_Create.DETAILS:   
      return (
            <SimpleBar />
          )
        case teacher_Status.teacher_Create.SHOWCARD:
        // alert("in show card")
        return (
         <SimpleBar  />
        );
        break;
         
      default:
        break;
    }
  }

  render() {
    return (
      <div>
          {this.getScreen(this.props.teacher_Status)}
          </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TeacherView);