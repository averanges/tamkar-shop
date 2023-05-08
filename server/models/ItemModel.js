import mongoose from 'mongoose'

const model = mongoose.Schema({
    title: {
        type: String,
    },
    brand: {
        type: String,
    },
    descr: {
        type: String,
    },
    category: {
        type: String,
    },
    mainCategory: {
        type: String,
    },
    price: {
        type: Number,
    },
    oldPrice: {
        type: Number
    },
    mainImg: {
        type: String,
    },
    additionalImages: [{type: String}],
    howToUse: {
        type: String,
    },
    skinType: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    benefits: {
        type: String,
    },
    contents: {
        type: String,
    },
    descrImages: [{type: String}],
    isNewItem : {type: Boolean},
    isSale: {type: Boolean}
})

export const itemModel = mongoose.model('Item', model)