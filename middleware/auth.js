import jwt from 'jsonwebtoken'


const authMiddleware = async(req,res,next)=>{
    const {token} = req.headers;
    if (!token) {
        return res.json({
            succss:false,
            message:"Not Authorised Login Again",
        })
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({
            succss:false,
            message:"Error"
        })
        
    }
}

export default authMiddleware;