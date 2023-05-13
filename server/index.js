import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import adminRoutes from "./routes/adminRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import passport from "passport"
import authRoutes from "./routes/authRoutes.js"
// import paymentRoutes from "./routes/paymentRoutes.js"
dotenv.config()

const app = express()

app.use(passport.initialize())

app.use(cors({
    origin: 'https://tamkar-beauty.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
  }));
app.use(express.json())

// app.use('/payment', paymentRoutes)
app.use('/admin', adminRoutes)
app.use('/auth', authRoutes)
app.use('/', userRoutes)

const startServer = async () => {
    await mongoose.connect(process.env.MONGO_DB).then(() => console.log('Connected to mongo'))
    app.listen(process.env.PORT, () => console.log('Connected to server'))
}

startServer()