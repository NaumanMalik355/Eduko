
import React, { Component } from "react";
import { connect } from "react-redux";

import DataFailure from './Data_Failure'
import GetData from './GetData'
import ShowData from './ShowData'
import CreatedSuccess from './Create_Success'
import { dataServer } from '../../server/DataServer';
import { data_Status } from '../../constants/Data';
// import { data_Actions } from '../../constants/Data'
// import HorizontalNonLinearStepper from './stepper';

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    data_Status: state.data_Reducer.data_Status,
    // userId : state.data_Reducer.userId,
    personList:state.data_Reducer.personList
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    handleFindOneTodo: () => { dispatch(dataServer.handleFindOneTodo()) },
    handleEnterData: (name,regno,status) => { dispatch(dataServer.handleEnterData(name,regno,status)) },
    //handleBackClick : () =>{ dispatch({ type: data_Actions.login_SignIn.NEW }) }
  };
};

class DataVieww extends Component {
  getScreen(status) {
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
      case data_Status.data_Create.NEW:
        return (
          <ShowData handleFindOneTodo={this.props.handleEnterData} />
          //<HorizontalNonLinearStepper />CreatedSuccess
        );
        break;
      case data_Status.data_Create.FAILURE:
        return (
          <DataFailure />
        );
      break;
       case data_Status.data_Create.SHOWLIST:
       //this.props.history.push('/TodoView/' + this.props.userId);
         return (
           <GetData persons={this.props.personList} />
        );
        break;
    
          case data_Status.data_Create.SUCCESS:
          return (
            <CreatedSuccess  handleFindOneTodo={this.props.handleFindOneTodo} />

          );
          break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
          {this.getScreen(this.props.data_Status)}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataVieww);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
