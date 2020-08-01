const express = require('express');
const artistRoute = require('./routes/artistRoute');
const productRoute = require('./routes/productRoute');
const viewRoute = require('./routes/viewRoute');
const devRoute = require('./routes/devRoute');
const app = express();
const path = require('path');
const sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'public/views'));
  
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(sassMiddleware({
    src: path.join(__dirname, 'public/stylesheets/sass'),
    dest: path.join(__dirname, 'public/stylesheets'),
    debug: true,
    indentedSyntax: true,
    outputStyle: 'compressed',
    prefix: '/stylesheets' 
  }));
  
app.use('/home', viewRoute);
app.use('/api', artistRoute); 
app.use('/api', productRoute);
app.use('/api', devRoute);

module.exports = app;  