var conn = require('../database/connect');


const trangchu={
    getAll: (callback) => {
        return conn.query("SELECT ALL * FROM products", callback);    
    },
    getById: (id, callback) => {
        return conn.query(`SELECT * FROM products WHERE id = ${id}`, callback);
        
      }      
};
module.exports=trangchu;