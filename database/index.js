const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/morelooks", { useNewUrlParser: true })
  .then(() => console.log("connection made"))
  .catch(err => console.error(err));

const productSchema = new mongoose.Schema(
  {
    productname: String,
    imageurl: [String],
    shoesizes: [Number],
    clothingsizes: [String],
    designer: String,
    price: Number,
    color: [String],
    itemtype: String,
    description: String,
    _id: {
      type: Number
    }
  },
  {
    versionKey: false,
    autoIndex: false 
  }
);


const Product = mongoose.model("Product", productSchema);

module.exports = Product;

//db.products.find({price: 31, itemtype: "shoe" , designer: "Alexander Wang", color: ["black"]})
//db.currentOp().products.createIndex({ itemtype: 1 });