const db = require('../config/db.js');
const User = db.user;
const Profile = db.profile;
const Role = db.role;
const UserRole = db.userRole;

module.exports = {
  add(req, res) {
      return User
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  
  list(req, res) {
      return User
      .findAll({
        include: [{
          model: Profile,
          as: 'profile'
        },
        {
          model: Role,
          as: 'roles'
        }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },

  getById(req, res) {
    return User
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
          as: 'profile'
        },
        {
          model: Role,
          as: 'roles'
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
      return User
      .findByPk(req.params.id,{
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

  delete(req, res) {
      return User
      .findByPk(req.params.id,{
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