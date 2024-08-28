var conn = require('../database/connect');

const Categories = {
  // Phương thức lấy ra tất cả các bản ghi trong Category
  getAll: (callback) => {
    return conn.query("SELECT * FROM categories", callback);
  },
  
  // Phương thức tìm bản ghi theo id
  getById: (id, callback) => {
    return conn.query(`SELECT * FROM categories WHERE id = ${id}`, callback);
  },
  
  // Phương thức thêm mới
  create: (data, callback) => {
    return conn.query(`INSERT INTO categories (name, status) VALUES ('${data.name}','${data.status}')`, callback);
  },
  
  // Phương thức cập nhật
  update: ( data, callback) => {
    let status =data.status == 'on' ? 1 : 0;
    return conn.query(`UPDATE categories SET name = '${data.name}',  status =${status} WHERE id =${data.id}`, callback);
  },
  
  // Phương thức xóa
  delete: (id, callback) => {
    return conn.query(`DELETE FROM categories WHERE id = ${id}`, callback);
  }
};

module.exports = Categories;
