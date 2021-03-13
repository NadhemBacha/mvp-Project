const mysql = require('mysql');
const mysqlConfig = require('../config.js');

const connection = mysql.createConnection(mysqlConfig);


// Get all cars
const selectAllCars = (req,res) => {
  let sql ='SELECT * FROM mycars';
  connection.query(sql, (err, result) => {
    if(err) console.log(err) 
    res.send(result) 
  });
};

//Get only one car by id
const getCar = (req,res) => {
  let sql =`SELECT * FROM mycars WHERE id = ?`;
  connection.query(sql, [req.params.id], (err, result) => {
    if(err) console.log(err) 
    else res.send(result) 
  });
};

// Post one car
const addCar = (req,res) => {
    const sql = `INSERT INTO mycars (numberPlate, carBrand, imageUrl) VALUES (?,?,?)`;
    let x = req.body  
    connection.query(sql, [x.numberPlate, x.carBrand, x.imageUrl], (err,result) => {
      if(err) console.log(err);
      res.send("Posted successfully")
    })

}

// Delete one car
const deleteCar = function(req,res) {
  let sql = `DELETE FROM mycars WHERE id=?`;
  connection.query(sql, [req.params.id] , (err, result)=>{
    if(err) console.log(err)
    res.send(result)
  })
}

//Delete all cars
const deleteAll = function(req,res) {
  let sql = `DELETE FROM mycars WHERE id <> 0`;
  connection.query(sql, [req.params.id] , (err, result)=>{
    if(err) console.log(err)
    res.send(result)
  })
}


//Update one car
const updateCar = function(req, res) {
  let sql = `UPDATE mycars SET numberPlate=?, carBrand=?, imageUrl=? WHERE id= ?`;
  let x = req.body
  connection.query(sql, [x.numberPlate, x.carBrand,x.imageUrl,req.params.id], (err, result)=>{
    if(err) console.log(err)
    res.send(result)
  })
}




module.exports = {
  selectAllCars,
  addCar,
  deleteCar,
  updateCar,
  deleteAll,
  getCar
}


