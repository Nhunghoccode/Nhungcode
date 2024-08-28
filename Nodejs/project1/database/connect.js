const mysql = require('mysql');
var conn = mysql.createConnection({
    //host name
    host:"localhost",
    //Tên mặc định của tài khoản mysql là root
    user:'root',
    //Mật khẩu để vào cơ sở dữ liệu mặc định là rỗng
    password:'',
    //Tên cơ sở dữ liệu muốn kết nối 
    database:'project1'
});
module.exports=conn;