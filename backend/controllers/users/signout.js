import { User } from "../../models/Users.js";

export const signout = async (req, res) => {
    if (!req.cookies?.token) {
        return res.status(204).json({ error: "User Authorization Error: Unable to logout" })
    }
    const refreshToken = req.cookies.token;
    try {
        const userExists = await User.findOne({ refreshToken }).exec();
        if (!userExists) {
            req.session.destroy()
            return res.status(204).json({ error: "User Authorization Error: User not found" });
        }

        userExists.refreshToken = null;
        await userExists.save();

        res.cookie('token', '', { maxAge: 1 })
        res.clearCookie("token", { httpOnly: true, sameSite: "None", secure: true });

        return res.status(200).json({ message: 'Logout successful completed' })

    } catch (error) {
        res.status(500).json({ error: 'Logout Error' })
    }
};