const User = require('../models').User;

module.exports = {
  create(req, res) {
      return User
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  
  index(req, res) {
      return User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  }, 

  update(req, res) {
      return User
      .findByPk(req.params.userId,{
        attributes: ['id', 'name'],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return user
          .update({
            name: req.body.name || user.name,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
      return User
      .findByPk(req.params.userId,{
        attributes: ['id', 'name'],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return user
          .destroy({
            name: req.body.name || user.name,
          })
          .then(() => res.status(200).send({ message: "Usuário excluido com sucesso!"}))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

};