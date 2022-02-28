const express = require('express')
const router =  express.Router()
const { getGoals,setGoals,updateGoal,deleteGoal } = require('../controllers/goalController')

// to use body object to send and take data i need to have a middleware to make that job
// o middleware tha brisketai sto server.js me thn morfi app.use

router.get('/', getGoals);

router.post('/', setGoals);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

// i need to add functionality to the body of these routes so i make the Controler
module.exports = router