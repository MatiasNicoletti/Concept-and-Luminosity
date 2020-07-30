const mongoose = require('mongoose');

const connect = () => {
    const url = process.env.DATA_BASE_LINK.replace(
        '<password>',
        process.env.DATA_BASE_PASSWORD
    );
    
    mongoose
        .connect(url, {   
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        .then(() => console.log('DB connection successful!'));
}
module.exports = connect
connect;
