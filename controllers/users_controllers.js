import User from '../models/user.js';
import fs from 'fs';
import path from 'path';

export const profile = async (req, res) => {
  console.log("profile");
  return res.render('user_profile', {
    title: 'User Profile'
  }); 
}