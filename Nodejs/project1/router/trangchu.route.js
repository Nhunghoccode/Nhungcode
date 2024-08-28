const trangchuController=require("../Controllers/trangchuController");
const bodyParser=require('body-parser');
const authMiddleware = require("../middlewares/authMiddleware");
// const ProductController = require('../Controllers/ProductController');

const route_trangchu= function(app){
    // app.get('/trangchu', trangchuController.index);
    app.get('/sanpham/:id', trangchuController.sanpham)

};
module.exports=route_trangchu