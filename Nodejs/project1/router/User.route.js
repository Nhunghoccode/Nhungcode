const express = require('express');
const UsersController = require('../Controllers/UsersController');
const bodyParser=require('body-parser');
const authMiddleware = require('../middlewares/authMiddleware');

const route_User= function(app){
    app.get('/list_user',authMiddleware.authcheck, UsersController.index);
    app.get('/add_user',authMiddleware.authcheck,UsersController.add);
    app.post('/luu_user',authMiddleware.authcheck,UsersController.create);
    app.get('/edit_user/:id',authMiddleware.authcheck,UsersController.edit);
    app.post('/update_user',authMiddleware.authcheck,UsersController.update);


}
module.exports=route_User
