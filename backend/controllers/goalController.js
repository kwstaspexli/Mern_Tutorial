// epeidh xrhsimooiw mongoose gia eukolia 
// prepei na xrhsimopoihsw async stous controllers mou

// anti na exw try-catch gia ta async aithmata mpor na xrhsimopoihsv 
// ton error handler mesw npm i express-async-handler
const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'Get goals'})
})
const setGoals = asyncHandler(async (req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
})

const updateGoal = asyncHandler( async (req,res) => {
    res.staus(200).json({message:  `Update goal ${req.params.id}` })
})

const deleteGoal = asyncHandler( async (req,res) => {
    res.staus(200).json({message:  `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}