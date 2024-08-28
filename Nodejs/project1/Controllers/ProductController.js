const multer = require('multer');
const path = require('path');
const products = require('../models/products');
const { create } = require('domain');
var conn = require('../database/connect');
const util = require('util');
const { getById } = require('../models/categories');
const { send } = require('process');
const { date } = require('joi');


const ProductController = {

  // Lấy tất cả sản phẩm và render danh sách
  // getAllProducts: (req, res) => {
  //   products.getAll((err, data) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.render('Products/list_products', { products: data });
  //     }
  //   });
  // },

  getLIMITProducts:(req,res)=>{
    products.getLIMIT((err,data)=>{
      if(err){
        res.send(err);
      }else{
        res.render('Products/list_products', { products: data });
      }
    });
  },


  add: (req, res) => {
    const query = util.promisify(conn.query).bind(conn);

    (async () => {
      try {
        const cat = await query('select * from categories');
        // const products = await products.getById(productId);
        res.render('Products/add', { cat: cat });
      }
      finally {

      }
    })()
  },
  // Thêm sản phẩm mới với upload ảnh
  create: (req, res) => {
    const newProduct = {
      name: req.body.name,
      image: `/images/${req.file.filename}`,
      price: req.body.price,
      category_id: req.body.category_id,
      description: req.body.description,
    };

    products.create(newProduct, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/products');
      }
    });
  },


  edit: async (req, res) => {
    // const productId = req.params.id;
    const query = util.promisify(conn.query).bind(conn);
    (async () => {
      try {
        const cat = await query('SELECT * FROM categories');
        products.getById(req.params.id, (err, data) => {
          if (err) {
            res.send(err);
          }
          else {
            res.render('Products/edit', { products: data[0], cat: cat });
          }
        });
      } finally {

      }
    })()
  },
  // Cập nhật sản phẩm với upload ảnh mới (tùy chọn)
  update: (req, res) => {
    const updatedProduct = {
      id: req.body.id,
      name: req.body.name,
      image: req.file ? `/images/${req.file.filename}` : req.body.currentImage,
      price: req.body.price,
      category_id: req.body.category_id,
      description: req.body.description,
    };

    products.update(updatedProduct, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/products');
      }
    });
  },

  // Xử lý yêu cầu xóa sản phẩm
  delete: (req, res) => {
    const productId = req.params.id;
    products.delete(productId, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect('/products');
      }
    });
  },

  all: (req, res) => {
    var { query } = req.query;
    if (query) {
      products.search(query, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.render('userpages/trangchu', { products: data });
        }
      });
    } else {
      products.getAll((err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.render('userpages/trangchu', { products: data });
        }

      });
    }
  }
}

module.exports = ProductController;