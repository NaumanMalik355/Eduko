import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import LoginView from './components/Login/Login_View';
import RegisterView from './components/CreateAccount/Create_View';
import DataVieww from './components/DataComponent/DataView'
import TodoView from './components/TodoList/TodoList_View';
import ButtonAppBar from './components/Layout/Navbar'
import SimpleBar from './components/Eduko/Dashboard'
import TeacherView from './components/Eduko/Teacher_View'
import StudentView from './components/EdukoStudent/Student_View'
import ShowStudent from './components/EdukoStudent/ShowStudent'
import CreateFailure from './components/sherry'
const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/LoginView' component={LoginView} />
      <Route exact path='/Register' component={RegisterView} />
      <Route exact path='/TodoView/:userId' component={TodoView} />
      <Route exact path='/DataView' component={DataVieww} />
      <Route exact path='/ButtonAppBar' component={ButtonAppBar} />
      <Route exact path='/' component={TeacherView} />
      <Route exact path='/StudentView/:courseId' component={StudentView} />
      <Route exact path='/ShowStudent' component={ShowStudent} />
      <Route exact path='/CreateFailure' component={CreateFailure} />
      <Route exact path='/SimpleBar' component={SimpleBar} />
    </Switch>
  </BrowserRouter >
);
export default Root;