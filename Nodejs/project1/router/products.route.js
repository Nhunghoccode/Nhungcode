const  ProductController  = require('../Controllers/ProductController');
const path = require('path');
const multer = require('multer');
const bodyParser=require('body-parser');
const authMiddleware = require('../middlewares/authMiddleware');
const route_products = function(app) {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, './images');
        },
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}`);
        }
      });
      const upload = multer({ storage: storage });       
  app.get('/products',authMiddleware.authcheck, ProductController.getLIMITProducts); 
  app.get('/products/add',authMiddleware.authcheck, ProductController.add); 
  app.post('/products/add', authMiddleware.authcheck,upload.single('image'), ProductController.create); 
  app.get('/products/edit/:id',authMiddleware.authcheck, ProductController.edit);
  app.post('/products/update',authMiddleware.authcheck, upload.single('image'), ProductController.update); 
  app.post('/products/:id/delete',authMiddleware.authcheck, ProductController.delete);
  app.get('/trangchu',ProductController.all);
}

module.exports = route_products;
