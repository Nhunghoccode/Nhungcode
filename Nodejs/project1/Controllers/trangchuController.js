const util = require('util');
var conn = require('../database/connect');
var trangchu = require('../models/trangchu');
const bodyParser=require('body-parser');

const trangchuController = {

    index: (req, res) => {
        trangchu.getAll((err, data) => {   
          if (err) {
            res.send(err);
          } else {
            res.render('userpages/trangchu',{ products: data });
          }
        });
      },
 
    
      sanpham: (req, res) => {
        const query = util.promisify(conn.query).bind(conn);
        var sanpham;
        (async () => {
          try {
            const cat = await query('select * from products where id ='+req.params.id);
            const lost = await query('select * from products');
            // const products = await products.getById(productId);
            res.render('userpages/sanpham', { cat: cat, lost:lost[0] });
          }
          finally {
    
          }
        })()
   
      },
    
};
module.exports =  trangchuController;
