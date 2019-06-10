const Product = require('./index.js');

// const random = (data) => {
//   return Math.floor(Math.random() * data.length)
// }

const dbhelpers = {
  get: (querystring, num = 9500000) => {
    // let randomNum = Math.floor(9500000+ Math.random()*(10000000-9500000));
    return Product.find({itemtype: querystring, _id: {$gt: num}})
      .limit(5)
      .then(data => data)
      .catch(err => console.error(err))
  },
}

module.exports = dbhelpers;
