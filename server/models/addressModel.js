import mongoose from "mongoose";

const model = mongoose.Schema({
    userId: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    addressLineFirst: {
        type: String,
    },
    addressLineSecond: {
        type: String,
    },
    email: {
        type: String,
    },
    orderNotes: {
        type: String
    }
})

export const addressModel = mongoose.model('Address', model)