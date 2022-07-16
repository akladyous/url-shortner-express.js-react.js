import mongoose from "mongoose"
const { Schema } = mongoose;
import { UrlInfo } from "./urlInfo.js";
import { nanoid } from 'nanoid'
import { $ } from '../util/util.js'

const URLSchema = new Schema({
    originalUrl: {
        type: String,
        required: [true, 'Original URL is required'],
        lowercase: true,
        validate: {
            validator: async function validateUrl(v) {
                return await $.isvalidUrl(v)
            },
            message: (props) => { return `${props.value} is not valid URL` }
        },
    },
    shortUrl: {
        type: String,
        required: [true, 'Short URL is required'],
        lowercase: true,
        unique: [true, 'Short URL already exists'],
        default: () => { return nanoid(8) },
        index: true,
    },
    clicksCount: { type: Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
},
    {
        timestamps: true,
        toJSON: { transform: function (doc, ret) { delete ret._id; delete ret.__v; return ret } },
    }
);

// URLSchema.post('save', async function (doc, next) {
//     const urlData = await $.isvalidUrl(this.originalUrl)

//     const urlInfo = await UrlInfo.create({
//         href: urlData.data.href,
//         origin: urlData.data.origin,
//         protocol: urlData.data.protocol,
//         hostName: urlData.data.hostname,
//         port: urlData.data.port,
//         pathName: urlData.data.pathname,
//         search: urlData.data.search,
//         addresses: urlData.addresses,
//         originalUrl: this.id
//     })
//     console.log("toJson : ", urlInfo.toJSON())
//     console.log("toObject : ", urlInfo.toObject())
//     next();
// });
// urlsSchema.statics.findByShortUrl = async function (shortUrl) {
//     return await this.findOne({ shortUrl });
// }

// urlsSchema.post('save', (doc, next) => {
//     console.log('doc: ', doc)
//     next();
// }

export const Url = mongoose.model("Url", URLSchema);
