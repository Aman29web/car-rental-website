import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const protect = async (req, res, next) => {
  let token = req.headers.authorization

  if (!token) {
    return res.json({ success: false, message: "Not authorized, no token" })
  }

  try {
    // If header starts with Bearer, split it
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1]
    }

    // Verify token properly
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded) {
      return res.json({ success: false, message: "Not authorized, invalid token" })
    }

    // Attach user to request (decoded contains the payload you signed)
    req.user = await User.findById(decoded).select("-password")

    next()
  } catch (error) {
    console.log(error.message)
    return res.json({ success: false, message: "Not authorized, token failed" })
  }
}
