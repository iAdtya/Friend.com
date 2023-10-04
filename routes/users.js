import express from 'express';
import UserController from '../controllers/users_controllers.js';

const userController = new UserController();

const router = express.Router();

router.get('/profile', userController.profile);

router.get('/sign-up', userController.signUp);

router.get('/sign-in', userController.signIn);

router.post('/create', userController.create);

// router.get('/sign-out', destroySession);

export default router;