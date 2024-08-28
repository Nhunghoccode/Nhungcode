const express = require('express');
const userController = require('../Controllers/userController');
const bodyParser=require('body-parser');
const authMiddleware = require('../middlewares/authMiddleware');


const route_users= function(app){

app.get('/list_user',authMiddleware.authcheck, userController.index);
app.get('/', userController.get);
app.post('/dangki', userController.create);
app.get('/login',userController.add);
app.post('/check_login',userController.check_login);
app.post('/delete/:id',userController.delete);
app.get('/logout',userController.logout);
app.post('/add_user', userController.create);
};
module.exports=route_users
