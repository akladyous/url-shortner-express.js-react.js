import { Url } from "../../models/UrlModel.js"

export const shortUrlController = async (req, res, next) => {
    debugger
    const shortUrl = req.params.shorturl
    if (!shortUrl || shortUrl.length !== 8) {
        res.status(400).redirect('/')

    }

    try {
        const url = await Url.find({ shortUrl: shortUrl })
        if (!url) res.status(400).redirect('/')

        console.log('url : ', url)
    } catch (error) {

    }

};
//9es_d2fe