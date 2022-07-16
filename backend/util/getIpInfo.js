import Apiip from 'apiip.net';
import { APIIP_KEY } from '../config/env.js'

export const getIpInfo = async (ipAddress) => {
    const fields = ["continentCode", "continentName", "countryCode", "countryName", "countryNameNative", "officialCountryName", "latitude", "longitude", "capital", "phoneCode", "countryFlagEmoj", "countryFlagEmojUnicode", "borders"]

    try {
        const apiip = Apiip(APIIP_KEY);
        const ipInfo = await apiip.getLocation({ ip: ipAddress, output: 'json', fields: fields })
        return Promise.resolve(ipInfo)
    } catch {
        return Promise.reject(new Error('Error decoding IP address'))
    }
};