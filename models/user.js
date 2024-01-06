const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
