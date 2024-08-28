const express= require('express');
const app= express();
const session= require('express-session');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
const Joi = require('joi');
const multer = require('multer');
var path=require('path');
const authMiddleware = require('./middlewares/authMiddleware');
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
    secret:'Nhung15062005NNH',
    resave:true,
    saveUninitialized:false
}));

app.use((req,res,next)=>{
    res.locals.login=req.session.login;
    next();
})


require('./router/categories.route')(app);
require('./router/users.route')(app);
require('./router/products.route')(app);
require('./router/trangchu.route')(app);
require('./router/User.route')(app);

app.get('/admin',authMiddleware.authcheck,(req,res)=>{
    res.render('admins/admin');
});

app.listen(3000,()=>console.log("serve runing..."))