import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import { dbConnect } from "./config/dbConnect.js";
import { sessionOptions } from "./config/sessionOptions.js";
import {
    errorHandler,
    credentials,
    logger,
    missingRoutes,
    handleCors
} from "./middleware/middleware.js";
import { routes } from "./routes/routes.js";
import { PORT, COOKIE_SECRET } from './config/env.js'

dbConnect();
const app = express();
app.use(logger);
app.use(credentials);
app.use(cookieParser(COOKIE_SECRET));
app.use(session(sessionOptions));
app.use(handleCors());
app.use(express.json());

routes(app)

app.use(missingRoutes);
app.use(errorHandler);

mongoose.connection.once("open", () => {
    console.log("\x1b[33m%s\x1b[0m", "mongoDB successfully connected");
    app.listen(PORT, () => {
        console.log("\x1b[34m%s\x1b[0m", `ExpressJS is listening on port ${PORT}`);
    });
});
