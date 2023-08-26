const express=require('express');
const router = express.Router()
const Employees=require('../models/employee_model')

const Employee=require('../models/employee_model')
const { generateCurdMethods }= require('../services')
const employeeCurd = generateCurdMethods(Employee)
const {validateDbId, raiseRecord404Error}= require('../middlewares');


router.get('/', (req, res, next)=>{
    //Employees.find()
    employeeCurd.getAll()
    .then(data => res.send(data))
    .catch(err => next(err))
})

router.get('/:id', validateDbId, (req, res, next)=>{
  //Employees.findById({_id:req.parms.id})        
  //Employees.find({fullName:req.params.fullName})
  employeeCurd.getById({_id:req.params.id})

  .then(data => {
    if (data) res.send(data)
    else raiseRecord404Error(req, res)
  })
  .catch(err => next(err))
})


router.post('/savedata', (req,res, next)=>{
  //Employees.insertMany(req.body)
  employeeCurd.create(req.body)
  .then(data => res.status(201).json(data))
  .catch(err => next(err))
   
})

router.put('/:id', validateDbId, (req,res) => { 
employeeCurd.update(req.params.id, req.body)
.then(data => {
  if (data) res.send(data)
  else raiseRecord404Error(req, res)
})
.catch(err => next(err))
})


router.delete('/:id', validateDbId, (req,res) => { 
  employeeCurd.delete(req.params.id)
  .then(data => {
    if (data) res.send(data)
    else raiseRecord404Error(req, res)
  })
  .catch(err => next(err))
  
})

module.exports = router