const mongoose=require('mongoose')
const dbUri='mongodb://127.0.0.1:27017/employee_db';
console.log("----------------in db second step-----------");
module.exports = () => {
    return mongoose.connect('mongodb://localhost:27017/employee_db',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
}