import { isvalidUrl } from "../helpers/isValidUrl.js";
import { isValidEmail } from '../helpers/isValidEmail.js'
import { getIpInfo } from './getIpInfo.js';
export const $ = {
    isAlphaNumeric: (string = new String, length = null) => {
        const regex = new RegExp(`^[a-zA-Z0-9]${length ? `{${length}}` : '+'}$`) //dynamic length
            `/^[a-zA-Z0-9]+$/` // any string length
        return regex.test(string)
    },

    isValidEmail: isValidEmail,
    isvalidUrl: isvalidUrl,
    getIpInfo: getIpInfo,
};