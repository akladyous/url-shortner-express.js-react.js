import { isvalidUrl } from "../helpers/isValidUrl.js";
import { isValidEmail } from '../helpers/isValidEmail.js'
import { getIpInfo } from './getIpInfo.js';
export const $ = {
    isValidEmail: isValidEmail,
    isvalidUrl: isvalidUrl,
    getIpInfo: getIpInfo,
};