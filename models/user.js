import mongoose from "mongoose";

import multer from 'multer';

import path from 'path';  

const AVATAR_PATH = path.join('/uploads/users/avatars');

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
    avatar:{
      type: String
    }
  },
  { timestamps: true }
);

const storing = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

userSchema.statics.uploadedAvatar = multer({ storage: storing }).single('avatar');

userSchema.statics.avatarPath = AVATAR_PATH;

const User = mongoose.model("User", userSchema);

export default User;