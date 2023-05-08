import mongoose from "mongoose";

const model = mongoose.Schema({
    userId: {
        type: String,
    },
})

export const ordersModel = mongoose.model('Orders', model)