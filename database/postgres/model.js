const Sequelize = require('sequelize');

const sequelize = new Sequelize('calvin197', 'calvin197', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool:{
    max:45, //up 10 next if no good
    min:6,
    acquire: 30000,
    idle: 10000
  }
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

// this is used to drop the table

// Test2.sync({ force: true }).then(() => {
//   console.log('success creating table!')
// });

module.exports = Test2;