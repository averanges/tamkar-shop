import paymentService from "../services/paymentService.js"

class paymentControllers {
    generateToken = async (req,res) => {
    try {
         const clientToken = await paymentService.generateToken()
        return res.json(clientToken)   
    } catch (error) {
            return res.status(400).json({error: error.message})   
    }
    }
    processPayment = async (req, res) => {
        try {
            const {amount, nonce} = req.body
            const response = await paymentService.processPayment({amount, nonce})
           return res.json(response)   
       } catch (error) {
            return res.status(400).json({error: error.message})   
       }
       }
    }

export default new paymentControllers()