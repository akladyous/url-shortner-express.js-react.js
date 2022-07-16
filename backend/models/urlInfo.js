import mongoose from "mongoose"
const { Schema } = mongoose;

const udlData = new Schema({
    _id: false,
    href: { type: String, lowercase: true, },
    origin: { type: String, lowercase: true, },
    protocol: { type: String, lowercase: true, },
    hostName: { type: String, lowercase: true, },
    port: { type: String, lowercase: true, },
    pathName: { type: String, lowercase: true, },
})

const ipLocation = new Schema({
    _id: false,
    address: { type: String, lowercase: true },
    continentCode: { type: String, lowercase: true },
    continentName: { type: String, lowercase: true },
    countryCode: { type: String, lowercase: true },
    countryName: { type: String, lowercase: true },
    countryNameNative: { type: String, lowercase: true },
    officialCountryName: { type: String, lowercase: true },
    latitude: { type: Number },
    longitude: { type: Number },
    capital: { type: String, lowercase: true },
    phoneCode: { type: String, lowercase: true },
    countryFlagEmoj: { type: String, lowercase: true },
    countryFlagEmojUnicode: { type: String, lowercase: true },
    borders: [{ type: String, lowercase: true }],
})

const urlInfoSchema = new Schema({
    data: udlData,
    ipAddress: { type: String, required: [true, 'IP Address is required'] },
    location: ipLocation,
    originalUrl: { type: Schema.Types.ObjectId, ref: 'Url' }
}
    , {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret, options) {
                delete ret._id
                delete ret.__v
                return ret
            }
        }
    },
);
export const UrlInfo = mongoose.model("UrlInfo", urlInfoSchema);
