// import { User } from "../../models/Users.js";
import { $ } from '../../util/util.js'

export const generateUrl = async (req, res, next) => {
    const { url } = req.body;
    const originalUrl = await $.isvalidUrl(url)
    console.log('req.session : ', res.session)
    debugger
    res.status(200).json({ message: 'original url' })
}