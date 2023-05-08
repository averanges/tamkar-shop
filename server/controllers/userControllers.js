import { itemModel } from "../models/ItemModel.js"
import userService from "../services/userService.js"

class userController {
    getAllItems = async (req, res) => {
        const {category} = req.query
        if(category === 'HAIR CARE'){
        const allItems = await itemModel.find({mainCategory: category })
        return res.json(allItems)
        }
        if(category === 'SALES' || category === 'SALES HOME'){
            const allItems = await itemModel.find({isSale: true})
            return res.json(allItems)
            }
        const items = await itemModel.find({category})
        return res.json(items)
    }
    getSingleItem = async (req, res) => {
        const {_id} = req.query
        const item = await itemModel.findById(_id)
        res.json(item)
    }
    getAddedCard = async (req, res) => {
        const data = Object.keys(req.query)
        const items = await itemModel.find({_id: {$in: data}})
        const newItems = [...items]
        const updatedItems = newItems.map(item => {
            const itemId = item._id.toString()
            if (req.query[itemId]) {
                return {...item._doc, chosenAmount: Number(req.query[itemId])}
            }
            return item;
          }); 

        return res.json(updatedItems)
    }
    getAccountInfo = async (req, res) => {
        try {
            const {id} = req.userId
            const user = await userService.getAccountInfo(id)
            return res.json(user)
        } catch (error) {
            res.json({error: error.message})
        }
    }
    saveAddress = async (req, res) => {
        try {
            const {id} = req.userId
            const data = req.body.shippingData
            const address = await userService.saveAddress({data, id})
            return res.json(address)
        } catch (error) {
            res.json({error: error.message})
        }
    }
}

export default new userController()