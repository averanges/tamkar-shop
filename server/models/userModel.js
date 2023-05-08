import mongoose from "mongoose";

const model = mongoose.Schema({
    email: {
        type: String,
        required: true, 
        unique: true
    },
    name: {
        type: String,
        required: true, 
        unique: true
    },
    psw: {
        type: String,
    },
    googleId: {
        type: String,
    },
    registerAt: {
        type: Date,
        default: Date.now()
    },
    address: {
        type: String
    }
})

export const userModel = mongoose.model('User', model)