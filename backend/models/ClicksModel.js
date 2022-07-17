import mongoose from "mongoose"
const { Schema } = mongoose;

const clicksSchema = new Schema({
    client: new Schema({
        _id: false,
        type: { type: String, default: null },
        name: { type: String, default: null },
        version: { type: String, default: null },
        engine: { type: String, default: null },
        engineVersion: { type: String, default: null },

    }),
    device: new Schema({
        _id: false,
        brand: { type: String, default: null },
        model: { type: String, default: null },
        type: { type: String, default: null },
    }),
    os: new Schema({
        _id: false,
        name: { type: String, default: null },
        platform: { type: String, default: null },
        version: { type: String, default: null },
    }),
    url: { type: Schema.Types.ObjectId, ref: 'Url' }
}
    , { timestamps: true, toJSON: { virtuals: true } }
);

export const Clicks = mongoose.model("Clicks", clicksSchema);