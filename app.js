const express = require('express');
const artistRoute = require('./routes/artistRoute');
const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/api', artistRoute); 
module.exports = app;