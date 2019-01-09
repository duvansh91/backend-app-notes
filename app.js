require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notes_routes');
const usersRoutes = require('./routes/users_routes');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    next();
})

app.use(notesRoutes);
app.use(usersRoutes);

app.listen(3000);