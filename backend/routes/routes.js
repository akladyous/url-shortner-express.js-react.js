import { homeRoute } from "./homeRoute.js"
import { usersRoute } from "./usersRoute.js"
import { shortUrlRoute } from './shortUrlRoute.js'
import { verifyJWT } from "../middleware/verifyJWT.js"
import { handleRefreshToken } from "../middleware/handleRefreshToken.js"
import { urlsRoute } from "./urlsRoute.js"
import { testRoute } from './testRoute.js'


export const routes = (app) => {
    app.use('/', homeRoute)
    app.use('/api', shortUrlRoute)
    app.use('/api', usersRoute)
    app.use("/api/refresh", handleRefreshToken)
    app.use('/api/*', verifyJWT)
    app.use('/api', urlsRoute)
    app.use('/api', testRoute)
};

