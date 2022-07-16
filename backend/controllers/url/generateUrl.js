import { User } from "../../models/Users.js";
import { Url } from '../../models/UrlModel.js'
import { UrlInfo } from "../../models/urlInfo.js";
import Auth from '../../util/auth.js';
import { $ } from '../../util/util.js'
import { REFRESH_TOKEN_SECRET } from '../../config/env.js'

export const generateUrl = async (req, res, next) => {
    const { originalUrl } = req.body;
    const jwt = req.cookies.token

    if (!originalUrl) return res.status(400).json({ error: 'missing url' })

    try {

        const urlData = await $.isvalidUrl(originalUrl)
        const ipInfo = await $.getIpInfo(urlData.ipAddress)

        const originalUrlData = { ...urlData, location: { ...ipInfo } }

        const { id } = await Auth.jwtVerify(jwt, REFRESH_TOKEN_SECRET)
        const user = await User.findById(id)

        // await Url.deleteMany({})
        // await UrlInfo.deleteMany({})

        const url = await Url.create({ originalUrl: originalUrl, user: user.id })
        const newUrlInfo = new UrlInfo()
        newUrlInfo.originalUrl = url.id
        newUrlInfo.ipAddress = originalUrlData.ipAddress
        newUrlInfo.data = originalUrlData.data
        newUrlInfo.location = originalUrlData.location
        await newUrlInfo.save();

        // console.log('final data : ', newUrlInfo)

        res.status(200).json({ originalUrl: newUrlInfo.toJSON(), shortUrl: url.shortUrl })

    } catch (error) {
        console.log("error : ", error)
        return res.status(400).json({ error: 'Invalid URL' })
    }

}