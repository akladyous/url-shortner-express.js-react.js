import { Url } from "../../models/UrlModel.js"
import { Clicks } from '../../models/ClicksModel.js'
import { shortUrlHelper } from '../../util/shortUrlHelper.js'

export const shortUrlController = async (req, res, next) => {
    const shortUrl = req.params.shorturl
    const ua = req.headers['user-agent']
    try {
        const [shortUrlVerified, userAgent] = await shortUrlHelper(shortUrl, ua)

        const url = await Url.findOneAndUpdate({ shortUrl: shortUrl }, { $inc: { clicksCount: 1 } })

        if (!url) { console.log('url not found'); return res.redirect('http://localhost:3000') }

        const newClick = new Clicks(userAgent)
        newClick.url = url.id
        await newClick.save()
        console.log('clicksRecord : ', newClick.toJSON())
        return res.redirect(url.originalUrl)
    } catch (error) {
        console.log('error : ', error)
        return res.redirect('http://localhost:3000')
    }
};