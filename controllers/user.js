const User = require('../models').User;
const SECRET = require('../config/config');


module.exports = {

  //CRUD for users.
  create: (req, res) => {
    let { email,name, password } = req.body
    User.create({
      email: email,
      name: name,
      password: password
    }).then(result => {
      res.json(result);
    }).catch(err => {
      console.log(err);
      res.json(err);
    })
  },

  update: (req, res) => {
    let { email, password } = req.body
    User.update({
      email: email,
      name: name,
      password: password
    }, {
        where: { id: req.params.id }
      })
      .then((response) => {
        res.json(response);
      })
  },

  delete: (req, res) => {
    User.destroy({ where: { id: req.params.id } })
      .then(response => {
        res.json(response)
      })
  },

  show: (req, res) => {
    User.findById(req.params.id).then((users) => {
      res.json(users);
    });
  },

  //User authentication, data from POST
  userAuthentication: (req, res) => {

    let { email, password } = req.body

    User.findOne({ where: { email: email } })
      .then((user) => {
        if (!user) {
          res.status(404).json({ error: 'User no found' });
        } else {
          if (user.password === password) {
            console.log("dimeló",SECRET);
            res.status(200).json({ success: true });
          } else {
            res.status(401).json({ error: 'Incorrect password' });
          }
        }
      });
  }
}