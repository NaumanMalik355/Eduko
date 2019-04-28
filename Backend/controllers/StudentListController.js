const studentList = require("../models/StudentList");
const TeacherData=require("../models/TeacherData")
exports.enterStudentData = (req,res) =>{
console.log(req)
console.log(req.body);
console.log("DATA ATTEMPT FROM :" , req.body.email)
        let newAccount = new studentList(req.body)
        newAccount.save((err, account) => {
          if (err) {
            console.log("failure in creating account",err);
            res.status(500).json({'dataStatus':'failure','err':err});
          }
          else{
            console.log("account created and list is "+account);
            // res.status(200).json({'dataStatus':'created','todos':account});       
            //this is for updating after adding student()
            query = {studentcoursecode : req.body.studentcoursecode}
            studentList.find(query)
            .then(todos => {
                    var query={countstudent:todos.length}
                    var target={coursecode : req.body.studentcoursecode}
                    TeacherData.updateOne(target, { $set: query }, { new: true }, (err, doc) => {
                    if (!err) {
                      console.log("updated successfully"+doc);
                    res.status(200).json({'todo_status':'found','todos':todos});
                    }
                    else { 
                    res.status(500).send({'questionStatus':'NOT_UPDATED', 'data':doc}); }
                         });
             }).catch(err => {
              if(err){
                res.status(500).json({'todo_status':'not_found','err':err});
              }
            });
          }
      });
  }

  exports.studentFindOneTodo = (req, res) => {
    query = {studentcoursecode : req.params.scoursecode}
    studentList.find(query)
    .then(todos => {
        res.status(200).json({'todo_status':'found','todos':todos});
    }).catch(err => {
    	if(err){
    		res.status(500).json({'todo_status':'not_found','err':err});
    	}
    });
};

exports.findall = (req, res) => {
  //query = {userId : req.params.userId}
  studentList.find()
  .then(data => {
    console.log("Get all Data "+data)
      res.status(200).json({'dataStatus':'found','ttodos':data});
  }).catch(err => {
    res.status(500).json({'dataStatus':'not_found','err':err});
 });
};

exports.deleteStudent = (req,res) =>{
  console.log("Deleting Student Data... ")
 // query = {dataId : req.params.dataId}
 studentList.deleteMany({}, (err, accounts) => {
    if (err) {
      console.log("ERROR in database............");
      res.status(500).send(err);
    }
    res.status(200).json(accounts);
  });
}