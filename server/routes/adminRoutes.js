import express from "express"
import adminControllers from "../controllers/adminControllers.js"

const adminRoutes = express.Router()

adminRoutes.post('/new-items', adminControllers.addNewItem)

export default adminRoutes