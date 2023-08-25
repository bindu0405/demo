const express = require("express");
const bodyParser=require('body-parser')
let port=3000;
//local imports
const connectDb=require('./db.js')
const employeeRoutes= require('./routes/employee_controller.js')
const { errorHandler} = require('./middlewares')

const app = express();
//middleware
app.use(bodyParser.json())
app.use('/api/employees', employeeRoutes)
app.use(errorHandler)

connectDb()
.then(()=>{
    console.log('dbconnection succeeded')
    app.listen(port,
    ()=>console.log('server started at: 3000'))
})
.catch(err=>console.log(err));
