import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    passwrod: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default userSchema;