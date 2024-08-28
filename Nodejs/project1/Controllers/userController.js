const { date } = require('joi');
const users = require('../models/users');
const bcrypt = require('bcrypt');
const userController = {
    index: (req, res) => {
      users.getAll((err, data) => {   
        if (err) {
          res.send(err);
        } else {
          res.render('users/list_user',{ users: data });
        }
      });
    },
    get:(req,res)=>{  
      res.render('users/dangki');
    },

    create:(req,res)=>{
      bcrypt.hash(req.body.password,parseInt(10)).then((passmoi)=>{
        var email=req.body.email;
        var name=req.body.name;

        users.create (({email,name,passmoi}),(err,data)=>{
          if(err)
            res.send(err);
          else
          res.render('users/dangnhap');
        })
         
      });
    },


    add:(req,res)=>{
      res.render('users/dangnhap')
    },

    check_login:(req,res)=>{
      const {email,password}=req.body;
      users.check_login(email,password,(err,result)=>{
        if (err) {
          res.send(err)
        }else{
         
          req.session.login=result;
          res.redirect('/admin');
        }
      });
    },


    delete:(req,res)=>{
      users.delete(req.params.id,(err,data)=>{
        if(err){
          res.send(err);
        }else{
          res.redirect('/list_user');
        }
      })
    },

    logout:(req,res)=>{
      req.session.login = null;
      return res.redirect('/login');
    }
};

module.exports = userController;
