import authServices from "../services/authServices.js"

class authController {
    signup = async (req,res) => {
            try {
            const data = req.body
            const userId = await authServices.signup(data)
            const token = await authServices.generateToken(userId)
            return res.json(token)   
    } catch (error) {
            return res.status(400).json({error: error.message})   
    }
    }
    login = async (req, res) => {
        try {
            const data = req.body
            const userId = await authServices.login(data)
            const token = await authServices.generateToken(userId)
            return res.json(token)    
        } catch (error) {
            return res.status(400).json({error: error.message})   
        }
    }
}

export default new authController()