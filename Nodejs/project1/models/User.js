const conn = require('../database/connect');
const users = {
    getAll: (callback) => {
        return conn.query("SELECT * FROM users", callback);
    },
    
    getById: (id, callback) => {
        return conn.query(`SELECT * FROM users WHERE id = ${id}`, callback);
    },
    
    create: (data, callback) => {
        return conn.query(`INSERT INTO users (name, email, password) VALUES ('${data.name}', '${data.email}', '${data.password}')`, callback);
    },
    update: ( data, callback) => {
        return conn.query(`UPDATE users SET name = '${data.name}',  email ='${data.email}', password='${data.password}'  WHERE id =${data.id}`, callback);
      },
       
      delete: (id, callback) => {
        return conn.query(`DELETE FROM users WHERE id = ${id}`, callback);
    }


}

module.exports = users;
