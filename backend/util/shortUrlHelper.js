import DeviceDetector from "device-detector-js";

export const shortUrlHelper = (shortUrl, userAgent) => {
    const promises = [];

    const assertAlphaNumeric = new Promise((resolve, reject) => {

        if (shortUrl.length === 8) {
            resolve(shortUrl)
        } else {
            reject('invalid short url format')
        }
    })
    const assertUserAgent = new Promise((resolve, reject) => {
        const device = new DeviceDetector()
        const ua = device.parse(userAgent)
        delete ua.bot
        if (ua.client !== null) {
            resolve(ua)
        } else {
            reject('invalid userAgent')
        }
    })
    promises.push(assertAlphaNumeric, assertUserAgent)
    return Promise.all(promises)
}
