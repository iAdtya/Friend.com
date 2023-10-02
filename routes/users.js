import express from 'express';
import {profile} from '../controllers/users_controllers.js';

const router = express.Router();

router.get('/profile', profile);

// router.get('/sign-up', signUp);

// router.get('/sign-in', signIn);

// router.post('/create', create);

// router.get('/sign-out', destroySession);

export default router;