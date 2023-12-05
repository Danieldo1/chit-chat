import { Request, Response,Router } from "express";
import { User } from "./userModel";
const jwt = require("jsonwebtoken");
import "dotenv/config"

const router = Router();

router.post("/auth", async (req: Request, res: Response) => {
    const user = new User(req.body)
    try {
        await user.save()
        const accessToken = jwt.sign(user.toObject(),process.env.ACCESS_TOKEN_SECRET!)
        res.setHeader("Set-Cookie", `user=${accessToken}; Path=/ `)
        res.send("user created")
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

router.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})

router.get("/user", async (req: Request, res: Response) => {
    try {
        const data = await jwt.verify(req.headers.authorization,process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findOne({email: data?.email})
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})

export default router