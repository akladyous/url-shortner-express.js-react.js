import { URL } from 'url';
import dns from 'node:dns';
import { rejects } from 'assert';
// import { callbackify } from 'util'

export const isvalidUrl = (string = new String) => {
    const urlInfo = {};
    return new Promise((resolve, reject) => {
        try {
            const url = new URL(string)
            urlInfo['data'] = url
            dns.lookup(
                url.hostname,
                { family: 0, all: true, hints: dns.ALL },
                (err, addresses) => {
                    if (err) reject('invalid url')
                    urlInfo['addresses'] = addresses
                    resolve(urlInfo)
                })
        } catch {
            reject(new Error('invalid url'))
        }
    })
};
