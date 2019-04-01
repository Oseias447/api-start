'use strict';

const env = require('./env');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models
db.user = require('../models/user')(sequelize, Sequelize);
db.role = require('../models/role')(sequelize, Sequelize);
db.branch = require('../models/branch.js')(sequelize, Sequelize);
db.profile = require('../models/profile')(sequelize, Sequelize);
db.company = require('../models/company.js')(sequelize, Sequelize);
db.person = require('../models/person.js')(sequelize, Sequelize);
db.city = require('../models/city.js')(sequelize, Sequelize);
db.provinse = require('../models/province.js')(sequelize, Sequelize);
db.userRole = require('../models/userrole.js')(sequelize, Sequelize);
db.credtCard = require('../models/creditcard.js')(sequelize, Sequelize);

// Associations Models
db.user.hasOne(db.profile, { foreignKey: 'user_id', as: 'profile' });
db.user.belongsToMany(db.role, { through: 'UserRole', as: 'roles', foreignKey: 'user_id' });
db.role.belongsToMany(db.user, { through: 'UserRole', as: 'users', foreignKey: 'role_id' });
db.branch.belongsTo(db.company, { foreignKey: 'company_id' });
db.company.hasMany(db.branch, { foreignKey: 'company_id', as: 'branches' });
db.city.belongsTo(db.provinse, { foreignKey: 'prov_code', targetKey: 'prov_code' });
db.provinse.hasMany(db.city, { foreignKey: 'prov_code', sourceKey: 'prov_code' });
db.credtCard.belongsTo(db.person, { foreignKey: 'card_id' });

module.exports = db;
