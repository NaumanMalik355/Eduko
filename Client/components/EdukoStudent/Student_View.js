
import React, { Component } from "react";
import { connect } from "react-redux";
import AddStudent from './AddStudent'
import ShowStudent from './ShowStudent'
import { edukoServer } from '../../server/EdukoServer';
import { teacher_Actions } from '../../constants/Eduko'

import { studentServer } from '../../server/StudentServer'
import { student_Actions } from '../../constants/Student'
import { student_Status } from '../../constants/Student'

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    student_Status: state.student_Reducer.student_Status,
    studentList:state.student_Reducer.studentList,
    userId : state.eduko_Reducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //handleSignIn: (username,password) => { dispatch(loginServer.handleSignIn(username,password)) },
    addStudent: (coursecose,email,fullname,regno,section)=> {dispatch(studentServer.addStudent(coursecose,email,fullname,regno,section))},
    showFindOneTodo:(scoursecode)=> {dispatch(studentServer.showFindOneTodo(scoursecode)) },
    handleFindOneTodo:()=> { dispatch(edukoServer.handleFindOneTodo()) },
    handleShowClick : () =>{ dispatch({ type: teacher_Actions.teacher_Create.CALLCARD }) },
    handleStudent : () =>{ dispatch({ type: student_Actions.student_Create.ADDSTUDENT }) },
  };
};

class StudentView extends Component {
constructor(props){
  super(props);
  this.state={studentlist:this.props.studentList}
}

componentDidMount(){
  //ksi aur component sy data ly kr aany ky lyeee
  //alert(this.props.match.params.courseId)
  
  this.props.showFindOneTodo(this.props.match.params.courseId);
  //this.props.handleFindOneTodo();
}

componentWillReceiveProps(ItemsProps){
  this.setState({studentlist:ItemsProps.studentList})
}
  getScreen(status) {
    //alert(" student view"+status)
    console.log("I am from add student Component getScreen: " + status);
    switch (status) {
      case student_Status.student_Create.SHOWSTUDENT:
      // alert(this.props.teacherList.length)
      //alert("hey same"+this.state.studentlist.length)
     
        return (
          <ShowStudent handleStudent={this.props.handleStudent}  showFindOneTodo={this.props.showFindOneTodo}
          studentlist={this.state.studentlist} />
        );
        break;
      case student_Status.student_Create.ADDSTUDENT:
        //alert(this.props.teacherList.length)
          return (
            <AddStudent addStudent={this.props.addStudent} courseId={this.props.match.params.courseId}/>
          );
          break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
          {this.getScreen(this.props.student_Status)}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentView);