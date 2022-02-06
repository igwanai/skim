const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3877", 
    database: "db"
})

db.connect();

class sensor{
    static async getValue(){
        return new Promise((resolve, reject) => {
            db.query("SELECT num FROM data", (err, data)=>{
                if(err) reject(err);
                resolve(data[0]);
            });   
        });
    }
}

module.exports = {
    sensor,
}