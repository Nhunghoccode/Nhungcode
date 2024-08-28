const conn = require('../database/connect');
const bcrypt = require('bcrypt');

const users = {

    getAll: (callback) => {
        return conn.query("SELECT * FROM users", callback);
    },
    
    getById: (id, callback) => {
        return conn.query(`SELECT * FROM users WHERE id = ${id}`, callback);
    },
    
    create: (data, callback) => {
        return conn.query(`INSERT INTO users (name, email, password) VALUES ('${data.name}', '${data.email}', '${data.passmoi}')`, callback);
    },


    check_login: (email, password, callback) => {
        var sql = "SELECT * FROM users WHERE email = '" + email + "'";
        conn.query(sql, (err, data) => {
            if (data[0]) { 
                    bcrypt.compare(password, data[0].password, (err, result) => {
                    if (result) {
                        return callback(null, data[0]); 
                    } else {
                        return callback(err, null); 
                    }
                    
                });
            } else {
                return callback(err, null); 
            }
        });
    },
    


    delete: (id, callback) => {
        return conn.query(`DELETE FROM users WHERE id = ${id}`, callback);
    }
};

module.exports = users;
