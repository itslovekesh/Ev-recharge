import jwt from 'jsonwebtoken'

// charger authentication middleware
const authCharger = async (req, res, next) => {
    const { ctoken } = req.headers
    if (!ctoken) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        const token_decode = jwt.verify(ctoken, process.env.JWT_SECRET)
        req.body.docId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authCharger;