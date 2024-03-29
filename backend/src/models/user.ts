import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    auth0Id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    addresse: {
      type: String,
    },
    country: {
      type: String,
    },
    addressLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
