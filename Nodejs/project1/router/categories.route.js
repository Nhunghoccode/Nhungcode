const CategoriesController=require("../Controllers/CategoriesController");
const authMiddleware = require("../middlewares/authMiddleware");
const route_categories= function(app){
    app.get('/categories',authMiddleware.authcheck, CategoriesController.index);
    app.get('/add-categories',authMiddleware.authcheck, CategoriesController.add);
    app.post('/luu',authMiddleware.authcheck,CategoriesController.create);
    app.get('/edit-categories/:id',authMiddleware.authcheck, CategoriesController.edit);
    app.post('/delete-categories/:id',authMiddleware.authcheck, CategoriesController.delete);
    app.post('/update-categories', authMiddleware.authcheck,CategoriesController.update);
    
}
module.exports=route_categories