const Product = require("./index.js");
const mongoose = require("mongoose");
const fs = require("fs");

const es = require("event-stream");
const JSONStream = require("JSONStream");

const seed = () => {
  // Create a readable stream
  let readableStream = fs.createReadStream("database/dummyData.json");
  // Set the encoding to be utf8.
  readableStream.setEncoding("UTF8");
  let storage = [];
  // pipe it
  readableStream.pipe(JSONStream.parse("*")).pipe(
    es.map(function(doc, next) {
      storage.push(doc);
      if (storage.length === 300) {
        Product.insertMany(storage);
        storage = [];
      }
    })
  );
  readableStream.on("end", () => {
    console.log("Done seeding!");
  });
};

seed();
