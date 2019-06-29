const express = require ('express')
const router = express.Router();
const calculateController = require ('../controllers/calculate')

router.get('/add', function (req,res){
    let variable1 = parseInt(req.query.var1)
    let variable2 = parseInt (req.query.var2)
    calculateController.add(variable1, variable2, function(err,result){
        if(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
        else{
            res.status(200).json({
                success: true,
                data: result
            })
        }
    })
})

router.get('/minus', function (req,res){
    let variable1 = parseInt(req.query.var1)
    let variable2 = parseInt (req.query.var2)
    calculateController.minus(variable1, variable2, function(err, result){
        if(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
        else{
            res.status(200).json({
                success: true,
                data: result
            })
        }
    })
})

router.get('/multiply', function (req, res){
    let variable1 = parseInt(req.query.var1)
    let variable2 = parseInt(req.query.var2)
    calculateController.multiply(variable1, variable2, function(err, result){
        if(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
        else{
            res.status(200).json({
                success: true,
                data: result
            })
        }
    })
})

router.get('/divide', function (req, res){
    let variable1 = parseInt(req.query.var1)
    let variable2 = parseInt(req.query.var2)
    calculateController.divide(variable1, variable2, function(err, result){
        if(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
        else{
            res.status(200).json({
                success: true,
                data: result
            })
        }
    })
})

router.get('/square', function (req, res){
    let variable1 = parseInt(req.query.var1)
    calculateController.square(variable1, function(err, result){
        if(err){
            res.status(400).json({
                success: false,
                message: err.message
            })
        }
        else{
            res.status(200).json({
                success: true,
                data: result
            })
        }
    })
})


module.exports = router