import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

export const jwtVerify = (req, res, next) => {
    try {
        let {token} = req.query; 
        if(!token) {
            const tokenId = req.body.token 
            const verifiedToken = jwt.verify(tokenId, process.env.JWT_SECRET);
            req.userId = verifiedToken; 
            return next()
        }
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = verifiedToken; 
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token or session expired" });
    }
}