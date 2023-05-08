import express from 'express'
import dotenv from 'dotenv'
import authControllers from '../controllers/authControllers.js';
dotenv.config()

const authRoutes = express.Router()

authRoutes.post('/signup', authControllers.signup)
authRoutes.post('/login', authControllers.login)


export default authRoutes