const teacher = require("../models/TeacherData");

exports.addteacher = (req,res) =>{
console.log(req)
console.log(req.body);
console.log("Register ATTEMPT FROM :" , req.body.teachername)
teacher.findOne({coursecode: req.body.coursecode}, (err, account) => {
    if (err)
    {
      console.log("Error in Server " + account)
      res.status(500).send({'registerStatus':'failure','err':err});
    }
    if(account != null || account != undefined )
    {
      console.log("Account found")
      res.status(500).send({'registerStatus':'existing'});
    }
    if(account=="")
    {
        console.log("Empty")
        res.status(200).send({'data':'empty'});
    }
    else{
        console.log("Account not found, create account")
        let newAccount = new teacher(req.body)
        newAccount.save((err, account) => {
          if (err) {
            console.log("failure in creating account",err);
            res.status(200).json({'registerStatus':'failure','err':err});
          }
          else{
            console.log("account created",account);
            //res.status(200).json({'registerStatus':'created','detailll':account});
            query = {coursename : req.body.coursename}
            teacher.find()
            .then(todos => {
                res.status(200).json({'todo_status':'found','ttodos':todos});
            }).catch(err => {
              if(err){
                res.status(500).json({'todo_status':'not_found','err':err});
              }
            });
          }
      });
  }
});
}

exports.showData = (req, res) => {
  //query = {userId : req.params.userId}
  teacher.find()
  .then(data => {
    console.log("Get all Data "+data)
      res.status(200).json({'dataStatus':'found','ttodos':data});
  }).catch(err => {
    res.status(500).json({'dataStatus':'not_found','err':err});
 });
};

exports.deleteTeacher = (req,res) =>{
  console.log("Deleting Data... ")
 // query = {dataId : req.params.dataId}
  teacher.deleteMany({}, (err, accounts) => {
    if (err) {
      console.log("ERROR in database............");
      res.status(500).send(err);
    }
    res.status(200).json(accounts);
  });
}