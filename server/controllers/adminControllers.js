import { itemModel } from "../models/ItemModel.js"

class adminController {
    addNewItem = async (req, res) => {
        const data = req.body
        const newItem = await itemModel.create(data)
        res.json(newItem)
    }
}

export default new adminController()