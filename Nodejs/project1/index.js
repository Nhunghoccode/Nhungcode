
// const { name } = require('ejs');
// const express = require('express');
// const app = new express();
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const Joi = require('joi');
// const multer = require('multer');
// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({ extended: false }));

// // Thiết lập kết nối MySQL
// var conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'project1'
// });

// //Cấu hình nơi lưu file hình ảnh
// const Luutru=multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,'./imge');
//     },
//     filename:(req, file,callback)=>{
//         callback(null,file.originalname);
//     }
// })


// // Kết nối tới MySQL
// conn.connect(function (err) {
//     if (err) throw err;
//     console.log('Đã kết nối tới MySQL');
// });

// app.get('/home', (req, res) => {
//     var sql = "SELECT * FROM categories";
//     conn.query(sql, (err, cate) => {
//         if (err) throw err;
//         res.render('sanpham', { cat: cate });
//     });
// });
// app.get('/cate', (req, res) => {
//     var sql = "SELECT * FROM categories";
//     conn.query(sql, (err, cate) => {
//         if (err) throw err;
//         res.render('Danhsach', { cat: cate });
//     });
// });
// app.get('/cate/them', (req, res) => {
//     res.render('add_category');
// });

// app.get('/cate/edit/:id', (req, res) => {
//     var sql = "select * from categories where id =" + req.params.id;
//     conn.query(sql, (err, cate) => {
//         if (err) throw err;
//         res.render('edit_category', { cat: cate[0] });
//     });

// });

// app.get('/cate/delete/:id', (req, res) => {
//     var sql = "delete * from categories where id =" + req.params.id;
//     conn.query(sql, (err, cate) => {
//         if (err) throw err;
//         res.render('cate',{cat: cate[0] });
//     });

// });


// //Khai báo biến uplaod để thực thi
// var upload=multer({storage:Luutru});
// app.post('/cate/save',upload.single('image'), (req, res) => {
//     const Schema = Joi.object().keys({
//         name: Joi.string().required().messages({ 'string.empty': 'Tên nhóm' }),
//         order: Joi.string().required().messages({ 'string.empty': 'Thứ tự' })
//     });
//     const { error } = Schema.validate(req.body, Joi.options);
//     if (error) {
//         console.log(error.details);
//         res.render('add_category', { err: error.details });
//     } else {
//         var sql = "INSERT INTO categories(id, name, status) VALUES ('" + req.body.id + "','" + req.body.name + "','" + (req.body.status = 'on' ? 1 : 0) + "')"
//         conn.query(sql, (err, cate) => {
//             if (err) throw err;
//             res.redirect('/cate');
//         });
//     }
// });


// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });







