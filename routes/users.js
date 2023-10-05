import express from 'express';
import UserController from '../controllers/users_controllers.js';
import passport from 'passport';

const userController = new UserController();

const router = express.Router();

router.get('/profile', userController.profile);

router.get('/sign-up', userController.signUp);

router.get('/sign-in', userController.signIn);

router.post('/create', userController.create);

router.post('/create-session', passport.authenticate(
  'local',
  {failureRedirect: '/users/sign-in'},
), userController.createSession);

// router.get('/sign-out', destroySession);

export default router;