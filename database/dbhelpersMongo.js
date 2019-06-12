const Product = require('./index.js');

const dbhelpers = {
  get: (querystring, num = 9500000) => {
    // let randomNum = Math.floor(9500000+ Math.random()*(10000000-9500000));
    return Product.findOne({itemtype: querystring, _id: {$gt: num}})
      .then(data => data)
      .catch(err => console.error(err))
  },
}

module.exports = dbhelpers;
