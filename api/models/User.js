const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required:false,
      unique:true,
    },
    email: {
      type:String,
      required:false,
      unique:true,
    },
    password: {
      type:String,
      required:false,
    },
    profilePic: {
      type:String,
      default:"",
    },
    },
    {timestamps:true}
  );

var model = mongoose.model("User", UserSchema);
// module.exports = mongoose.model("User", UserSchema);
module.exports = model;