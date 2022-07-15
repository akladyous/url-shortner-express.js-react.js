// import { User } from "../../models/Users.js";

export const generateUrl = (req, res, next) => {
    const originalUrl = req.body;

    debugger

    res.status(200).json({ message: 'original url' })
}