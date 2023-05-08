import { userModel } from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

class authServices {
    signup = async ({name, email, psw}) => {
        try {
            const existUserByEmail = await userModel.findOne({email})
            if(existUserByEmail) {
                throw new Error ('User email has already exist')
            }
            const existUserByName = await userModel.findOne({name})
            if(existUserByName) {
                throw new Error ('User name has already exist')
            }
            const hashPsw = await bcrypt.hash(psw, 10)
            const newUser = await userModel.create({name, email, psw: hashPsw})
            const id = newUser._id
            return id   
        } catch (error) {
            throw new Error(error.message)
        }
    }
    login = async ({email,psw}) => {
        try {
            const existUser = await userModel.findOne({email})
        if (!existUser) {
            throw new Error ('Email has not found')
        }
        const validePsw = await bcrypt.compare(psw, existUser.psw)
        if (!validePsw) {
            throw new Error ('Password is not correct. Try again.')
        }
        
        const loggedUserId = existUser._id
        return loggedUserId
        } catch (error) {
            throw new Error(error.message)
        }
    }
    generateToken = async (userId) => {
        const accessToken = jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: '1d'})
        return accessToken
    }
}

export default new authServices()