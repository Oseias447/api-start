const userController = require('../controllers').user;
const companyController = require('../controllers').company;
const branchController = require('../controllers').branch;
const profileController = require('../controllers').profile;
const roleController = require('../controllers').role;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
}));

  /* User */
  app.post('/api/users', userController.add);
  app.get('/api/users', userController.list);
  app.get('/api/users/:id', userController.getById);
  app.put('/api/users/:id', userController.update);
  app.delete('/api/users/:id', userController.delete);

  /* Company */
  app.get('/api/companies', companyController.list);
  app.get('/api/companies/:id', companyController.getById);
  app.post('/api/companies', companyController.add);
  app.post('/api/companies/:id', companyController.addWithBranchs);
  app.put('/api/companies/:id', companyController.update);
  app.delete('/api/companies/:id', companyController.delete);

  /* Branch */
  app.get('/api/branchs', branchController.list);
  app.get('/api/branchs/:id', branchController.getById);
  app.post('/api/branchs', branchController.add);
  app.put('/api/branchs/:id', branchController.update);
  app.delete('/api/branchs/:id', branchController.delete);

  /* Profile */
  app.get('/api/profiles', profileController.list);
  app.get('/api/profiles/:id', profileController.getById);
  app.post('/api/profiles', profileController.add);
  app.put('/api/profiles/:id', profileController.update);
  app.delete('/api/profiles/:id', profileController.delete);

  /* Role */
  app.get('/api/roles', roleController.list);
  app.get('/api/roles/:id', roleController.getById);
  app.post('/api/roles', roleController.add);
  app.post('/api/roles/:id', roleController.addUser);
  app.put('/api/roles/:id', roleController.update);
  app.delete('/api/roles/:id', roleController.delete);
};