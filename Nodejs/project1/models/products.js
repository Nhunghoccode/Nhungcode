var conn = require('../database/connect');

const products = {
  // Phương thức lấy ra tất cả các bản ghi trong Category
  getAll: (callback) => {
    return conn.query("SELECT products.*,categories.name AS cate_name FROM products INNER JOIN categories ON products.category_id=categories.id", callback);
    
  },

  getLIMIT: (callback) => {
    return conn.query("SELECT products.*, categories.name AS cate_name FROM products  JOIN categories ON products.category_id = categories.id WHERE price >= 100000 AND price <= 500000", callback);
},

  // Phương thức tìm bản ghi theo id
  getById: (id, callback) => {
    return conn.query(`SELECT * FROM products WHERE id = ${id}`, callback);
  },
  
  // Phương thức thêm mới
  create: (data, callback) => {
    return conn.query(`INSERT INTO products (name,image,price,category_id,description) VALUES ('${data.name}','${data.image}',${data.price},'${data.category_id}','${data.description}')`, callback);
  },
  
  // Phương thức cập nhật
  update: ( data, callback) => {
    return conn.query(`UPDATE products SET name = '${data.name}',  image ='${data.image}',price=${data.price},category_id='${data.category_id}',description='${data.description}' WHERE id =${data.id}`, callback);
  },
  
  // Phương thức xóa
  delete: (id, callback) => {
    return conn.query(`DELETE FROM products WHERE id = ${id}`, callback);
  },
  search:(name,callback)=>{
    return conn.query(`SELECT * FROM products WHERE name LIKE '%${name}%'`, callback);

}
};

module.exports = products;
