var categories = require('../models/categories');

const CategoriesController = {
  index: (req, res) => {
    categories.getAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.render('Categories/list', { cat: data });
      }
    });
  },

  add: (req, res) => {
    res.render('Categories/add');
  },

  create: (req, res) => {
    categories.create(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/categories');
      }
    });
  },
  edit: (req, res) => {
    const id = req.params.id;
    categories.getById(id, (err, data) => {
      if (err) {
        res.send(err);
      } 
      else {
        res.render('Categories/edit', { cat: data[0] });
      }
    });
  },

  delete: (req, res) => {
    const { id } = req.params; 
  
    categories.delete(id, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/categories'); 
      }
    });
  },
  

  update: (req, res) => {
    categories.update(req.body, (err,data) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/categories');
      }
    });
  }
};

module.exports = CategoriesController;
