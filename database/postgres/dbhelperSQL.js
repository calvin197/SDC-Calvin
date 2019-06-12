const Test2 = require('./model.js');
const Op = require('sequelize').Op;

const dbhelpers = {
  get: (querystring, num = 9500000) => {
    // let randomNum = Math.floor(9500000+ Math.random()*(10000000-9500000));
    return Test2.findAll({
        where: {
            itemtype: querystring,
            id: {[Op.gt]: num}
        },
        limit: 1
    })
      .then(data => data)
      .catch(err => console.error(err))
  },
}  


module.exports = dbhelpers;
