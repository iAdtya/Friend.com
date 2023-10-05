import User from '../models/user.js';
import fs from 'fs';
import path from 'path';


class UserController {

  profile(req,res){
    console.log("profile");
    return res.render('user_profile', {
      title: 'User Profile'
    }); 
  }

  signIn(req,res){

    if(req.isAuthenticated()){
      return res.redirect('/');
    }
    
    console.log("signIn");
    return res.render('login', {
      title: 'User Sign In'
    }); 
  }

  signUp(req,res){
    console.log("signUp");
    return res.render('signup', {
      title: 'User Sign Up'
    }); 
  }

  async create(req, res) {
    console.log(req.body);
  
    try {
      if (req.body.password !== req.body.confirm_password) {
        console.log("Password does not match");
        return res.redirect('back');
      } else {
        const newUser = new User(req.body);
        await newUser.save({ w: "majority", wtimeout: 10000 });
        console.log("User created", newUser);
        return res.status(200).redirect('/users/sign-in');
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send(error.message);
    }
  }

  createSession(req,res){
    console.log("createSession");
    return res.redirect('/');
  }

};

export default UserController;