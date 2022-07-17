import { Url } from "../../models/UrlModel.js"
import { Clicks } from '../../models/ClicksModel.js'
import DeviceDetector from "device-detector-js";
import { $ } from "../../util/util.js";


export const shortUrlController = async (req, res, next) => {
    const shortUrl = req.params.shorturl

    if (!shortUrl || !$.isAlphaNumeric(shortUrl, 8)) {
        res.redirect('http://localhost:3000')
    }

    const device = new DeviceDetector()
    const userAgent = device.parse(req.headers['user-agent'])
    delete userAgent.bot

    try {
        const url = await Url.findOneAndUpdate({ shortUrl: shortUrl }, { $inc: { clicksCount: 1 } })

        if (!url) res.status(400).redirect('http://localhost:3000')

        const newClick = new Clicks(userAgent)
        newClick.url = url.id
        await newClick.save()
        console.log('clicksRecord : ', newClick.toJSON())
        res.redirect(url.originalUrl)
    } catch (error) {
        res.redirect('http://localhost:3000')
    }

};
//9es_d2fe