import { addressModel } from "../models/addressModel.js"
import { userModel } from "../models/userModel.js"

class userService {
    getAccountInfo = async (id) => {
        try {
            const user = await userModel.findById(id)
            if(!user) {
                throw new Error ('Invalid token.')
            }
            return {id: user._id, email: user.email, name: user.name}
        } catch (error) {
            throw error
        }
    }
    saveAddress = async ({data, id}) => {
        try {
            const userAddress = await addressModel.findOne({userId: id})
            if(!user) {
                const newAddress = await addressModel.create({...data, userId: id})
                return newAddress
            }
            const newAddress = await addressModel.findOneAndUpdate({userId: id}, {...data, userId: id}, {new: true})
            return newAddress
        } catch (error) {
            throw error
        }
    }
}

export default new userService()