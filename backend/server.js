import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import morgran from 'morgan'
import { dbConnect } from "./config/dbConnect.js";
import { sessionOptions } from "./config/sessionOptions.js";
import { errorHandler, credentials, missingRoutes, handleCors } from "./middleware/middleware.js";
import { routes } from "./routes/routes.js";
import { PORT, COOKIE_SECRET } from './config/env.js'

const app = express();
// app.use(morgran('tiny'))
app.use(morgran('IP :remote-addr :date[web] :method :url\t :status - :response-time ms'))
app.use(credentials);
app.use(cookieParser(COOKIE_SECRET));
app.use(session(sessionOptions));
app.use(handleCors());
app.use(express.json());
// app.use(csrfMiddleWare)
routes(app)

app.use(missingRoutes);
app.use(errorHandler);

dbConnect((connection) => {
    if (connection instanceof Error) {
        console.log('Error connecting to mongoDB : ', connection.message);
        process.exit(1)
    } else {
        connection.once('open', () => {
            console.log("\x1b[33m%s\x1b[0m", "mongoDB successfully connected");
        });
        app.listen(PORT, () => {
            console.log("\x1b[34m%s\x1b[0m", `ExpressJS is listening on port ${PORT}`);
        });
    }
});
