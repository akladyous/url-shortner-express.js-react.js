import { URL } from 'url';
import dns from 'node:dns';
// import { callbackify } from 'util'

export const isvalidUrl = async (string = new String) => {
    const urlInfo = {
        data: { href: null, origin: null, protocol: null, hostname: null, port: null, pathname: null },
        ipAddress: null
    };
    try {
        const url = new URL(string)
        Object.keys(urlInfo.data).forEach(key => { urlInfo.data[key] = url[key] })
        const ip = await dns.promises.lookup(url.hostname, { family: 0, hints: dns.ADDRCONFIG || dns.V4MAPPED })
        urlInfo.ipAddress = ip.address
        return Promise.resolve(urlInfo)
    } catch {
        return Promise.reject(new Error('invalid url'))
    }
};
