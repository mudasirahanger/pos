const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");
const Swal  = require('sweetalert2');
const printJS = require('print-js');

// const path1 = 'database/pos1.db';  // for testing 
const stores = 'database/';  // for macOS testing 
// const stores = process.env.APPDATA; // for winOS testing 
const mainDB = "pos17.db";
const path2 = stores+"/"+mainDB;
 console.log(path2);
const exists = fs.existsSync(path2);

if (!exists) {

    fs.openSync(path2, 'w');
    const db = new sqlite3.Database(path2,sqlite3.OPEN_READWRITE,(err) =>{
      if (err) return console.error(err.message);
      
      console.log("DB Created successfully");      

    }); 
   
 
} 

const db = new sqlite3.Database(path2,sqlite3.OPEN_READWRITE,(err) =>{
              if (err) {
              return console.error(err.message);
              } else {
              console.log("connected successfully");
               
              
      db.run("CREATE TABLE orders(order_id INTEGER PRIMARY KEY AUTOINCREMENT,customer_name TEXT,customer_mobile TEXT, customer_address TEXT,customer_gst text,total REAL,discount REAL,gst REAL,date_added TEXT)",(err) =>{
        if (err) return console.error(err.message);
        console.log("Order Table Created successfully");
      });
      db.run("CREATE TABLE orders_products(orders_products_id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER,product_name TEXT,product_sku TEXT,price REAL,qty INTEGER)", (err)=>{
        if (err) return console.error(err.message);
        console.log("Order Products Table Created successfully");
      });
      db.run("CREATE TABLE products(product_id INTEGER PRIMARY KEY AUTOINCREMENT,product_name TEXT,sku TEXT,price REAL,qty INTEGER,date_added TEXT)",(err) =>{
        if (err) return console.error(err.message);
        console.log("Products Table Created successfully");
      });


              }
           }); 



