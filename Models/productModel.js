const mongoose = require("mongoose");
const dbstring = `mongodb+srv://truong:Iyqub150LIeEqryH@cluster0.n2t2l.mongodb.net/interview?retryWrites=true&w=majority`;
mongoose.connect(dbstring, { useNewUrlParser: true }).then(() => {
  console.log("connection successfully");
});
const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: [true, "product must have a id"],
    validate: [
      (val) => {
        if (val == 3) {
          return false;
        }
        return true;
      },
    ],
  },
  name: {
    type: String,
    minlength: [3, "length should more or equal 3"],
  },
  price: {
    type: Number,
    required: true,
  },
});
const product = mongoose.model("product", productSchema);
module.exports = product;
