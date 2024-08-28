var users = require ('../models/User');
const { edit } = require('./CategoriesController');
const UsersController = {
  index: (req, res) => {
        users.getAll((err, data) => {   
          if (err) {
            res.send(err);
          } else {
            res.render('users/list_user',{ users: data });
          }
        });
      },

  add:(req,res)=>{
        res.render('users/add_user');
      },
    

 create: (req, res) => {
        users.create(req.body, (err, data) => {
          if (err) {
            res.send(err);
          } else {
            res.redirect('/list_user');
          }
        })
    },

    edit: (req, res) => {
        const id = req.params.id;
        users.getById(id, (err, data) => {
          if (err) {
            res.send(err);
          } 
          else {
            res.render('users/edit_user', {users: data[0] });
          }
        });
      },
      
  update: (req, res) => {
    users.update(req.body, (err,data) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/list_user');
      }
    });
  }
    

    

};
module.exports = UsersController;

