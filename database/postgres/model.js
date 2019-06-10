const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('calvin197', 'calvin197', '', {
  host: 'localhost',
  dialect: 'postgres'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const Model = Sequelize.Model;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Test2 extends Model {}
Test2.init({
  // attributes
  productname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageurl: {
    type: Sequelize.STRING(1024),
    allowNull: false
  },
  shoesizes: {
    type: Sequelize.STRING,
    allowNull: true
  },
  clothingsizes: {
    type: Sequelize.STRING,
    allowNull: true
  },
  designer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  itemtype: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'test2s',
  timestamps: false
  // options
});

Test2.sync({ force: true }).then(() => {
  console.log('success creating table!')
});

// copy 