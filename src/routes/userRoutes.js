const express = require('express');
const userRegisterRouter = express.Router();

userRegisterRouter.get('/' ,(req ,res)=>{
    res.send('hello world')
})

module.exports = userRegisterRouter;