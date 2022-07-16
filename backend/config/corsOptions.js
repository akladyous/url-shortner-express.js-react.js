import { allowedOrigins } from "./allowedOrigins.js";

export const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.log(`handleCors -> ${origin} is blocked by server`)
            callback(new Error("Request blocked by CORS policy"), false);
        }
    },
    // optionsSuccessStatus: 200,
    // "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    // "preflightContinue": true,
    credentials: true,
};
