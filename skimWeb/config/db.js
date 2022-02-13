require('dotenv').config();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password, 
    database: process.env.database,
})

db.connect(err => {
    if(err) throw new Error(err)
});

class sensor{
    static getValue(){
        return new Promise((resolve, reject) => {
            db.query("SELECT num FROM data", (err, data)=>{
                if(err) reject(`${err}`);
                resolve(data[0]);
            });   
        });
    }

    static updateValue(newValue){
        return new Promise((resolve, reject) => {
            db.query("UPDATE data SET num = ?" , [newValue], (err)=>{
                if(err) reject(`${err}`);
                resolve({sucess:true});
            });
        });
    }
}

module.exports = {
    sensor,
}