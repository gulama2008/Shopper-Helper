const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// the shopSchema defines the shape for shop subdocument
const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
});

// the itemSchema defines the shape for pre-set item subdocument
const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
    },
    unit: String,
    shop: String,
    price: {
      type: Number,
      min: 0,
    },
  }
)
// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
    items: [itemSchema],
    shops: [shopSchema],
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref:"list"
      }]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
