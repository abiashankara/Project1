const express = require('express')
const router = express.Router();
const IndexController = require('../controllers/index')

router.route('/')
    .get(function(req, res){
        res.send ('Feed')
    })
    .post(function (req, res){
        let name = req.body.name;
        let biodata = req.body.description;
        IndexController.RegisterUser(name, biodata, function(err,result){
            if(err){
                res.status(400).json({
                    success: false,
                    message: err.message
                })
            }
            else{
                res.status(201).json({
                    success: true,
                    data: result
                })
            }
        })})
    .put (function (req, res){
        res.send('Add a caption')
    })    
    .delete (function (req, res){
        res.send ('Account Deleted')
    })

module.exports = router