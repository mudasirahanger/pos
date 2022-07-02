const axios = require("axios");
const Swal  = require('sweetalert2');
const printJS = require('print-js');

// const path1 = 'database/pos1.db';  // for testing 
const stores = process.env.APPDATA;
const mainDB = "pos14.db";
const path2 = stores+"/"+mainDB;
// console.log(path2);


// product syc with remote server
function productSyc(){         

    db.run("DELETE FROM products");
  
    $.ajax({
          url: 'https://www.p.phamb.co.in/POS/?key=1903f54cd46d54aa3200a4508c948db0&type=all',
          type: 'get',
          dataType: 'json',
          beforeSend: function() {
          //	$('#button-review').button('loading');
          },
          complete: function() {
          //	$('#button-review').button('reset');
          },
          success: function(json) {
            
         console.log(json);
  
         for (const product of json) {  
  
          console.log(product['Title']);
                 
          const  Title  = product['Title'];      
                    const  Variant_SKU  = product['Variant_SKU'];
                    const  Variant_Price  = product['Variant_Price'];
                    const  Variant_Qty  = product['Variant_Qty'];       
                    
                    const sql = `INSERT INTO products(product_name,sku,price,qty)
                                VALUES(?,?,?,?)`;
                    db.run(sql,[Title,Variant_SKU,Variant_Price,Variant_Qty],(err) =>{
                      
                      if (err) return console.error(err.message);
            
                      console.log("Data Inserted successfully");
        
                          Swal.fire({
                            title: 'Alert!',
                            text: 'Data Synchronized Successfully',
                            icon: 'success'
                          })
                    });
                    
         }
  
          }
      });
     
  
    // axios.get('https://www.p.phamb.co.in/POS/?key=1903f54cd46d54aa3200a4508c948db0&type=all')
    //     .then((response) => {
    //       // handle success
    //      // 
    
    //      const products = response.data.data;
          
    //      for (const product of products) {  
      
    //           const  Title  = product.Title;      
    //           const  Variant_SKU  = product.Variant_SKU;
    //           const  Variant_Price  = product.Variant_Price;
    //           const  Variant_Qty  = product.Variant_Qty;       
              
    //           const sql = `INSERT INTO products(product_name,sku,price,qty)
    //                       VALUES(?,?,?,?)`;
    //           db.run(sql,[Title,Variant_SKU,Variant_Price,Variant_Qty],(err) =>{
                
    //             if (err) return console.error(err.message);
      
    //             console.log("Data Inserted successfully");
  
    //                 Swal.fire({
    //                   title: 'Alert!',
    //                   text: 'Data Synchronized Successfully',
    //                   icon: 'success'
    //                 })
    //           });
              
    //   }
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     });
   
    // console.log('sycccc........');
    
   // db.run("CREATE TABLE orders(order_id INTEGER PRIMARY KEY AUTOINCREMENT,customer_name TEXT,customer_mobile TEXT,customer_gst REAL,total REAL,discount REAL,date_added TEXT)");
   // db.run("CREATE TABLE orders_products(orders_products_id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER,product_name TEXT,product_sku TEXT,qty INT,total REAL,discount REAL,date_added TEXT)");
   // db.run("CREATE TABLE products(product_id INTEGER PRIMARY KEY AUTOINCREMENT,product_name TEXT,sku TEXT,price REAL,qty int,date_added TEXT)");
  
   // db.run("DROP TABLE orders");
  
   }
  