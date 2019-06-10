const dbhelpers = require('../database/dbhelpers.js');
// ---------------------radis--------------------------
const redis = require('redis'); 
const client = redis.createClient(6379)

client.on('error', (err) => {
    console.log("Error " + err)
});
// ---------------------radis--------------------------
const controller = {
  getpurses: (req, res) => {
    dbhelpers.get('purses')
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  },
  getshoes: (req, res) => {
    // limit it to 100 options.
    let randomNum = Math.floor(9500000 + Math.random()*(100));
    const shoesRedisKey = `user:shoes${randomNum}`
    client.get(shoesRedisKey, (err, shoes)=>{
      if (shoes){
        res.status(200).send(JSON.parse(shoes))
      } else {
        dbhelpers.get('shoe', randomNum)
          .then(data => {
            client.setex(shoesRedisKey, 60, JSON.stringify(data))
            res.status(200).send(data)
          })
          .catch(err => res.status(404).send(err))
      }
    })
  },
  getearrings: (req, res) => {
    dbhelpers.get('earrings')
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  },
  getbracelets: (req, res) => {
    dbhelpers.get('bracelet')
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  },
  getdresses: (req, res) => {
    dbhelpers.get('dress')
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
  }
}

module.exports = controller;