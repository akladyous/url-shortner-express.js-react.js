import mongoose from "mongoose"
const { Schema } = mongoose;
import nanoid from 'nanoid'
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
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}
    , { timestamps: true, toJSON: { virtuals: true } },
);

// urlsSchema.pre('save', async function (next) {
//     const shortUrl = await this.generateShortUrl();
//     this.shortUrl = shortUrl;
//     next();
// });

// urlsSchema.statics.findByShortUrl = async function (shortUrl) {
//     return await this.findOne({ shortUrl });
// }

// urlsSchema.post('save', (doc, next) => {
//     console.log('doc: ', doc)
//     next();
// }

const Urls = mongoose.model("URL", URLSchema);
export default Urls;
