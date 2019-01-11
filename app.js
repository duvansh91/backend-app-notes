

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models')
const notesRoutes = require('./routes/notes_routes');
const usersRoutes = require('./routes/users_routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    next();
})

app.use(notesRoutes);
app.use(usersRoutes);

sequelize
  .sync({ force: process.env.DB_FORCE === 'True' })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}.`)
    )
  )
  .catch(err => console.error(err))