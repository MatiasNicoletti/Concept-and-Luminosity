const app = require('./app');
const port = process.env.PORT || 3000;
const connection = require('./database/connection');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'}); //once in the server to declare .env location


process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  }); 

const server = app.listen(port, ()=>{
    console.log(`Application running on port ${port}`); 
});

connection();

// product
//     name
//     price
//     publishedAt
//     type enum
//     description
//     measures[width, height, depth]


// artist
//     name
//     products[product]