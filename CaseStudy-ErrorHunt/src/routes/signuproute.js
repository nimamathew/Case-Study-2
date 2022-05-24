const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    
    var newuser = {
        //changed param by params for qn,10
        // "uid":req.param("uid"),
        // "pwd":req.param("pwd")
        "uid":req.params("uid"),
        "pwd":req.params("pwd")
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;