import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: String,
    password: String,
});

module.exports.user = mongoose.model("ีUser", UserSchema);