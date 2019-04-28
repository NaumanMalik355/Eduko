// app.js
const cors = require('cors');
var path = require('path')
const loginController = require("./controllers/LoginController");
const registerController = require("./controllers/RegisterController");
const todoListController = require("./controllers/TodoListController");
const PersonController = require("./controllers/PersonController")
const dataController = require("./controllers/DataController")
const departsemestercontroller = require("./controllers/DepartSemesterController")
const Bookcontroller = require("./controllers/BookController")
const teacherdatacontroller = require("./controllers/TeacherDataController")
const studentListController = require("./controllers/StudentListController")
const express = require("express");
const app = express();
var config=require("./config/db");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3301;
//mern stack
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Teacher
app
    .route("/api/Accounts/enter",)
    .post(teacherdatacontroller.addteacher)
app
    .route("/api/Accounts/teacherData",)
    .get(teacherdatacontroller.showData)
app
    .route("/api/Accounts/delTeacher",)
    .get(teacherdatacontroller.deleteTeacher)
app
    .route("/api/Accounts/enterStudent",)
    .post(studentListController.enterStudentData)
app
    .route("/api/Accounts/findStudent",)
    .get(studentListController.findall) 
app
    .route("/api/Accounts/deletestudent",)
    .get(studentListController.deleteStudent)

    
app
    .route("/api/Accounts/findcoursecode/:scoursecode",)
    .get(studentListController.studentFindOneTodo)
    
///Books 
app
    .route("/api/Accounts/enterbook",)
    .post(departsemestercontroller.handleEnterBook)

app
    .route("/api/Accounts/updatebook",)
    .post(Bookcontroller.handleBook)

//Data

app
    .route("/api/Accounts/getAllData/:deptname",)
    .get(departsemestercontroller.getAllDat)
app
    .route("/api/Accounts/createdata",)
    .post(dataController.handleEnterData)

app
    .route("/api/Accounts/getdata",)
    .get(dataController.getAllData)

app
    .route("/api/Accounts/deldata",)
    .delete(dataController.deleteData)
  

//Register
app
    .route("/api/Accounts/Register",)
    .post(registerController.handleRegister)

    //Login
  app
  .route("/api/Accounts/findall",)
  .get(loginController.handleAttempFindOneTodo)

  app
    .route("/api/Accounts/SignIn",)
    .post(loginController.handleSignInAttempt)

  app
    .route("/api/Accounts/getAll",)
    .get(loginController.getAllAccounts)

//Todo
    app
    .route("/api/Accounts/TodoList",)
    .post(todoListController.handleAttemptCreatTodo)

    app
    .route("/api/Accounts/getAllTodo",)
    .get(todoListController.handleAttempFindTodo)
    
    app
    .route("/api/Accounts/getOneTodo/:userId",)
    .get(todoListController.handleAttempFindOneTodo)

    //Person
    app
    .route("/api/Accounts/Create",)
    .post(PersonController.handleCreate)

    app
    .route("/api/Accounts/showww",)
    .get(PersonController.handleAttempFindOneTodo)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
