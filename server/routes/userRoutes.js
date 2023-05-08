import express from "express"
import userControllers from "../controllers/userControllers.js"
import { jwtVerify } from "../middleware/jwtVerify.js"

const userRoutes = express.Router()

userRoutes.get('/all-items', userControllers.getAllItems)
userRoutes.get('/single-item', userControllers.getSingleItem)
userRoutes.get('/get-added-card', userControllers.getAddedCard)
userRoutes.get('/get-account-info',jwtVerify, userControllers.getAccountInfo)
userRoutes.post('/save-address',jwtVerify, userControllers.saveAddress)

export default userRoutes