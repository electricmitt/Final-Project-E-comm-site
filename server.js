const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const routesUrls = require('./BackEnd/Routes/routes');
const cors = require('cors');

// hide your mongo connection constiables
require('dotenv').config();
mongoose.connect(process.env.DB_URI,  {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then( (res) => console.log('db connected'))
    .catch((err) => console.log(err));


app.use(express.json());
app.use(cors());
app.use('/signupmodels', routesUrls);

app.listen(4000, () => console.log('server is up and running'));